"use strict";
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ComponentPickerMenuPlugin;
const code_1 = require("@lexical/code");
const list_1 = require("@lexical/list");
const LexicalAutoEmbedPlugin_1 = require("@lexical/react/LexicalAutoEmbedPlugin");
const LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
const LexicalHorizontalRuleNode_1 = require("@lexical/react/LexicalHorizontalRuleNode");
const LexicalTypeaheadMenuPlugin_1 = require("@lexical/react/LexicalTypeaheadMenuPlugin");
const rich_text_1 = require("@lexical/rich-text");
const selection_1 = require("@lexical/selection");
const table_1 = require("@lexical/table");
const lexical_1 = require("lexical");
const react_1 = require("react");
const React = __importStar(require("react"));
const ReactDOM = __importStar(require("react-dom"));
const useModal_1 = __importDefault(require("../../hooks/useModal"));
const AutoEmbedPlugin_1 = require("../AutoEmbedPlugin");
const ImagesPlugin_1 = require("../ImagesPlugin");
const InsertLayoutDialog_1 = __importDefault(require("../LayoutPlugin/InsertLayoutDialog"));
const TablePlugin_1 = require("../TablePlugin");
class ComponentPickerOption extends LexicalTypeaheadMenuPlugin_1.MenuOption {
    // What shows up in the editor
    title;
    // Icon for display
    icon;
    // For extra searching.
    keywords;
    // TBD
    keyboardShortcut;
    // What happens when you select this option?
    onSelect;
    constructor(title, options) {
        super(title);
        this.title = title;
        this.keywords = options.keywords || [];
        this.icon = options.icon;
        this.keyboardShortcut = options.keyboardShortcut;
        this.onSelect = options.onSelect.bind(this);
    }
}
function ComponentPickerMenuItem({ index, isSelected, onClick, onMouseEnter, option, }) {
    let className = 'item';
    if (isSelected) {
        className += ' selected';
    }
    return (React.createElement("li", { key: option.key, tabIndex: -1, className: className, ref: option.setRefElement, role: "option", "aria-selected": isSelected, id: 'typeahead-item-' + index, onMouseEnter: onMouseEnter, onClick: onClick },
        option.icon,
        React.createElement("span", { className: "text" }, option.title)));
}
function getDynamicOptions(editor, queryString) {
    const options = [];
    if (queryString == null) {
        return options;
    }
    const tableMatch = queryString.match(/^([1-9]\d?)(?:x([1-9]\d?)?)?$/);
    if (tableMatch !== null) {
        const rows = tableMatch[1];
        const colOptions = tableMatch[2]
            ? [tableMatch[2]]
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(String);
        options.push(...colOptions.map((columns) => new ComponentPickerOption(`${rows}x${columns} Table`, {
            icon: React.createElement("i", { className: "icon table" }),
            keywords: ['table'],
            onSelect: () => editor.dispatchCommand(table_1.INSERT_TABLE_COMMAND, { columns, rows }),
        })));
    }
    return options;
}
function getBaseOptions(editor, showModal) {
    return [
        new ComponentPickerOption('Paragraph', {
            icon: React.createElement("i", { className: "icon paragraph" }),
            keywords: ['normal', 'paragraph', 'p', 'text'],
            onSelect: () => editor.update(() => {
                const selection = (0, lexical_1.$getSelection)();
                if ((0, lexical_1.$isRangeSelection)(selection)) {
                    (0, selection_1.$setBlocksType)(selection, () => (0, lexical_1.$createParagraphNode)());
                }
            }),
        }),
        ...[1, 2, 3].map((n) => new ComponentPickerOption(`Heading ${n}`, {
            icon: React.createElement("i", { className: `icon h${n}` }),
            keywords: ['heading', 'header', `h${n}`],
            onSelect: () => editor.update(() => {
                const selection = (0, lexical_1.$getSelection)();
                if ((0, lexical_1.$isRangeSelection)(selection)) {
                    (0, selection_1.$setBlocksType)(selection, () => (0, rich_text_1.$createHeadingNode)(`h${n}`));
                }
            }),
        })),
        new ComponentPickerOption('Table', {
            icon: React.createElement("i", { className: "icon table" }),
            keywords: ['table', 'grid', 'spreadsheet', 'rows', 'columns'],
            onSelect: () => showModal('Insert Table', (onClose) => (React.createElement(TablePlugin_1.InsertTableDialog, { activeEditor: editor, onClose: onClose }))),
        }),
        new ComponentPickerOption('Numbered List', {
            icon: React.createElement("i", { className: "icon number" }),
            keywords: ['numbered list', 'ordered list', 'ol'],
            onSelect: () => editor.dispatchCommand(list_1.INSERT_ORDERED_LIST_COMMAND, undefined),
        }),
        new ComponentPickerOption('Bulleted List', {
            icon: React.createElement("i", { className: "icon bullet" }),
            keywords: ['bulleted list', 'unordered list', 'ul'],
            onSelect: () => editor.dispatchCommand(list_1.INSERT_UNORDERED_LIST_COMMAND, undefined),
        }),
        new ComponentPickerOption('Check List', {
            icon: React.createElement("i", { className: "icon check" }),
            keywords: ['check list', 'todo list'],
            onSelect: () => editor.dispatchCommand(list_1.INSERT_CHECK_LIST_COMMAND, undefined),
        }),
        new ComponentPickerOption('Quote', {
            icon: React.createElement("i", { className: "icon quote" }),
            keywords: ['block quote'],
            onSelect: () => editor.update(() => {
                const selection = (0, lexical_1.$getSelection)();
                if ((0, lexical_1.$isRangeSelection)(selection)) {
                    (0, selection_1.$setBlocksType)(selection, () => (0, rich_text_1.$createQuoteNode)());
                }
            }),
        }),
        new ComponentPickerOption('Code', {
            icon: React.createElement("i", { className: "icon code" }),
            keywords: ['javascript', 'python', 'js', 'codeblock'],
            onSelect: () => editor.update(() => {
                const selection = (0, lexical_1.$getSelection)();
                if ((0, lexical_1.$isRangeSelection)(selection)) {
                    if (selection.isCollapsed()) {
                        (0, selection_1.$setBlocksType)(selection, () => (0, code_1.$createCodeNode)());
                    }
                    else {
                        // Will this ever happen?
                        const textContent = selection.getTextContent();
                        const codeNode = (0, code_1.$createCodeNode)();
                        selection.insertNodes([codeNode]);
                        selection.insertRawText(textContent);
                    }
                }
            }),
        }),
        new ComponentPickerOption('Divider', {
            icon: React.createElement("i", { className: "icon horizontal-rule" }),
            keywords: ['horizontal rule', 'divider', 'hr'],
            onSelect: () => editor.dispatchCommand(LexicalHorizontalRuleNode_1.INSERT_HORIZONTAL_RULE_COMMAND, undefined),
        }),
        ...AutoEmbedPlugin_1.EmbedConfigs.map((embedConfig) => new ComponentPickerOption(`Embed ${embedConfig.contentName}`, {
            icon: embedConfig.icon,
            keywords: [...embedConfig.keywords, 'embed'],
            onSelect: () => editor.dispatchCommand(LexicalAutoEmbedPlugin_1.INSERT_EMBED_COMMAND, embedConfig.type),
        })),
        new ComponentPickerOption('Image', {
            icon: React.createElement("i", { className: "icon image" }),
            keywords: ['image', 'photo', 'picture', 'file'],
            onSelect: () => showModal('Insert Image', (onClose) => (React.createElement(ImagesPlugin_1.InsertImageDialog, { activeEditor: editor, onClose: onClose }))),
        }),
        new ComponentPickerOption('Columns Layout', {
            icon: React.createElement("i", { className: "icon columns" }),
            keywords: ['columns', 'layout', 'grid'],
            onSelect: () => showModal('Insert Columns Layout', (onClose) => (React.createElement(InsertLayoutDialog_1.default, { activeEditor: editor, onClose: onClose }))),
        }),
        ...['left', 'center', 'right', 'justify'].map((alignment) => new ComponentPickerOption(`Align ${alignment}`, {
            icon: React.createElement("i", { className: `icon ${alignment}-align` }),
            keywords: ['align', 'justify', alignment],
            onSelect: () => editor.dispatchCommand(lexical_1.FORMAT_ELEMENT_COMMAND, alignment),
        })),
    ];
}
function ComponentPickerMenuPlugin() {
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    const [modal, showModal] = (0, useModal_1.default)();
    const [queryString, setQueryString] = (0, react_1.useState)(null);
    const checkForTriggerMatch = (0, LexicalTypeaheadMenuPlugin_1.useBasicTypeaheadTriggerMatch)('/', {
        minLength: 0,
    });
    const options = (0, react_1.useMemo)(() => {
        const baseOptions = getBaseOptions(editor, showModal);
        if (!queryString) {
            return baseOptions;
        }
        const regex = new RegExp(queryString, 'i');
        return [
            ...getDynamicOptions(editor, queryString),
            ...baseOptions.filter((option) => regex.test(option.title) ||
                option.keywords.some((keyword) => regex.test(keyword))),
        ];
    }, [editor, queryString, showModal]);
    const onSelectOption = (0, react_1.useCallback)((selectedOption, nodeToRemove, closeMenu, matchingString) => {
        editor.update(() => {
            nodeToRemove?.remove();
            selectedOption.onSelect(matchingString);
            closeMenu();
        });
    }, [editor]);
    return (React.createElement(React.Fragment, null,
        modal,
        React.createElement(LexicalTypeaheadMenuPlugin_1.LexicalTypeaheadMenuPlugin, { onQueryChange: setQueryString, onSelectOption: onSelectOption, triggerFn: checkForTriggerMatch, options: options, menuRenderFn: (anchorElementRef, { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }) => anchorElementRef.current && options.length
                ? ReactDOM.createPortal(React.createElement("div", { className: "typeahead-popover component-picker-menu" },
                    React.createElement("ul", null, options.map((option, i) => (React.createElement(ComponentPickerMenuItem, { index: i, isSelected: selectedIndex === i, onClick: () => {
                            setHighlightedIndex(i);
                            selectOptionAndCleanUp(option);
                        }, onMouseEnter: () => {
                            setHighlightedIndex(i);
                        }, key: option.key, option: option }))))), anchorElementRef.current)
                : null })));
}

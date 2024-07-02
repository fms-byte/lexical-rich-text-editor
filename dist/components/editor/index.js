"use client";
"use strict";
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
exports.default = Editor;
require("./styles.css");
const LexicalAutoFocusPlugin_1 = require("@lexical/react/LexicalAutoFocusPlugin");
const LexicalCheckListPlugin_1 = require("@lexical/react/LexicalCheckListPlugin");
const LexicalClearEditorPlugin_1 = require("@lexical/react/LexicalClearEditorPlugin");
const LexicalClickableLinkPlugin_1 = __importDefault(require("@lexical/react/LexicalClickableLinkPlugin"));
const LexicalErrorBoundary_1 = __importDefault(require("@lexical/react/LexicalErrorBoundary"));
const LexicalHashtagPlugin_1 = require("@lexical/react/LexicalHashtagPlugin");
const LexicalHistoryPlugin_1 = require("@lexical/react/LexicalHistoryPlugin");
const LexicalHorizontalRulePlugin_1 = require("@lexical/react/LexicalHorizontalRulePlugin");
const LexicalListPlugin_1 = require("@lexical/react/LexicalListPlugin");
const LexicalRichTextPlugin_1 = require("@lexical/react/LexicalRichTextPlugin");
const LexicalTabIndentationPlugin_1 = require("@lexical/react/LexicalTabIndentationPlugin");
const LexicalTablePlugin_1 = require("@lexical/react/LexicalTablePlugin");
const useLexicalEditable_1 = __importDefault(require("@lexical/react/useLexicalEditable"));
const React = __importStar(require("react"));
const react_1 = require("react");
const canUseDOM_1 = require("./shared/canUseDOM");
const SharedHistoryContext_1 = require("./context/SharedHistoryContext");
const ActionsPlugin_1 = __importDefault(require("./plugins/ActionsPlugin"));
const AutoEmbedPlugin_1 = __importDefault(require("./plugins/AutoEmbedPlugin"));
const AutoLinkPlugin_1 = __importDefault(require("./plugins/AutoLinkPlugin"));
const CodeActionMenuPlugin_1 = __importDefault(require("./plugins/CodeActionMenuPlugin"));
const CodeHighlightPlugin_1 = __importDefault(require("./plugins/CodeHighlightPlugin"));
const ComponentPickerPlugin_1 = __importDefault(require("./plugins/ComponentPickerPlugin"));
const DragDropPastePlugin_1 = __importDefault(require("./plugins/DragDropPastePlugin"));
const DraggableBlockPlugin_1 = __importDefault(require("./plugins/DraggableBlockPlugin"));
const EmojiPickerPlugin_1 = __importDefault(require("./plugins/EmojiPickerPlugin"));
const EmojisPlugin_1 = __importDefault(require("./plugins/EmojisPlugin"));
const FloatingLinkEditorPlugin_1 = __importDefault(require("./plugins/FloatingLinkEditorPlugin"));
const FloatingTextFormatToolbarPlugin_1 = __importDefault(require("./plugins/FloatingTextFormatToolbarPlugin"));
const ImagesPlugin_1 = __importDefault(require("./plugins/ImagesPlugin"));
const KeywordsPlugin_1 = __importDefault(require("./plugins/KeywordsPlugin"));
const LayoutPlugin_1 = require("./plugins/LayoutPlugin/LayoutPlugin");
const LinkPlugin_1 = __importDefault(require("./plugins/LinkPlugin"));
const ListMaxIndentLevelPlugin_1 = __importDefault(require("./plugins/ListMaxIndentLevelPlugin"));
const MentionsPlugin_1 = __importDefault(require("./plugins/MentionsPlugin"));
const TabFocusPlugin_1 = __importDefault(require("./plugins/TabFocusPlugin"));
const TableActionMenuPlugin_1 = __importDefault(require("./plugins/TableActionMenuPlugin"));
const TableCellResizer_1 = __importDefault(require("./plugins/TableCellResizer"));
const ToolbarPlugin_1 = __importDefault(require("./plugins/ToolbarPlugin"));
const YouTubePlugin_1 = __importDefault(require("./plugins/YouTubePlugin"));
const ContentEditable_1 = __importDefault(require("./ui/ContentEditable"));
const Placeholder_1 = __importDefault(require("./ui/Placeholder"));
const HtmlPlugin_1 = __importDefault(require("./plugins/HtmlPlugin"));
//import { useHtmlContext } from '@/app/htmlContext';
function Editor() {
    const { historyState } = (0, SharedHistoryContext_1.useSharedHistoryContext)();
    const isEditable = (0, useLexicalEditable_1.default)();
    const text = 'Enter some rich text...';
    const placeholder = React.createElement(Placeholder_1.default, null, text);
    const [floatingAnchorElem, setFloatingAnchorElem] = (0, react_1.useState)(null);
    const [isSmallWidthViewport, setIsSmallWidthViewport] = (0, react_1.useState)(false);
    const [isLinkEditMode, setIsLinkEditMode] = (0, react_1.useState)(false);
    //const { setHtmlString } = useHtmlContext();
    const onRef = (_floatingAnchorElem) => {
        if (_floatingAnchorElem !== null) {
            setFloatingAnchorElem(_floatingAnchorElem);
        }
    };
    (0, react_1.useEffect)(() => {
        const updateViewPortWidth = () => {
            const isNextSmallWidthViewport = canUseDOM_1.CAN_USE_DOM && window.matchMedia('(max-width: 1025px)').matches;
            if (isNextSmallWidthViewport !== isSmallWidthViewport) {
                setIsSmallWidthViewport(isNextSmallWidthViewport);
            }
        };
        updateViewPortWidth();
        window.addEventListener('resize', updateViewPortWidth);
        return () => {
            window.removeEventListener('resize', updateViewPortWidth);
        };
    }, [isSmallWidthViewport]);
    return (React.createElement("div", { className: 'text-xs shadow-sm bg-slate-50 border border-slate-300 text-slate-900 sm:text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50 block w-full dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary/50 dark:focus:border-primary/50' },
        React.createElement(ToolbarPlugin_1.default, { setIsLinkEditMode: setIsLinkEditMode }),
        React.createElement("div", { className: 'editor-container' },
            React.createElement(DragDropPastePlugin_1.default, null),
            React.createElement(LexicalAutoFocusPlugin_1.AutoFocusPlugin, null),
            React.createElement(LexicalClearEditorPlugin_1.ClearEditorPlugin, null),
            React.createElement(ComponentPickerPlugin_1.default, null),
            React.createElement(EmojiPickerPlugin_1.default, null),
            React.createElement(AutoEmbedPlugin_1.default, null),
            React.createElement(MentionsPlugin_1.default, null),
            React.createElement(EmojisPlugin_1.default, null),
            React.createElement(LexicalHashtagPlugin_1.HashtagPlugin, null),
            React.createElement(KeywordsPlugin_1.default, null),
            React.createElement(AutoLinkPlugin_1.default, null),
            React.createElement(LexicalHistoryPlugin_1.HistoryPlugin, { externalHistoryState: historyState }),
            React.createElement("div", { className: "editor-scroller" },
                React.createElement(LexicalRichTextPlugin_1.RichTextPlugin, { contentEditable: React.createElement("div", { className: "editor", ref: onRef },
                        React.createElement(ContentEditable_1.default, null)), placeholder: placeholder, ErrorBoundary: LexicalErrorBoundary_1.default }),
                React.createElement(HtmlPlugin_1.default, { onHtmlChanged: (html) => console.log(html), 
                    //onHtmlChanged={setHtmlString}
                    initialHtml: "" })),
            React.createElement(CodeHighlightPlugin_1.default, null),
            React.createElement(LexicalListPlugin_1.ListPlugin, null),
            React.createElement(LexicalCheckListPlugin_1.CheckListPlugin, null),
            React.createElement(ListMaxIndentLevelPlugin_1.default, { maxDepth: 7 }),
            React.createElement(LexicalTablePlugin_1.TablePlugin, { hasCellMerge: false, hasCellBackgroundColor: false }),
            React.createElement(TableCellResizer_1.default, null),
            React.createElement(ImagesPlugin_1.default, null),
            React.createElement(LinkPlugin_1.default, null),
            React.createElement(YouTubePlugin_1.default, null),
            React.createElement(LexicalClickableLinkPlugin_1.default, { disabled: isEditable }),
            React.createElement(LexicalHorizontalRulePlugin_1.HorizontalRulePlugin, null),
            React.createElement(TabFocusPlugin_1.default, null),
            React.createElement(LexicalTabIndentationPlugin_1.TabIndentationPlugin, null),
            React.createElement(LayoutPlugin_1.LayoutPlugin, null),
            floatingAnchorElem && !isSmallWidthViewport && (React.createElement(React.Fragment, null,
                React.createElement(DraggableBlockPlugin_1.default, { anchorElem: floatingAnchorElem }),
                React.createElement(CodeActionMenuPlugin_1.default, { anchorElem: floatingAnchorElem }),
                React.createElement(FloatingLinkEditorPlugin_1.default, { anchorElem: floatingAnchorElem, isLinkEditMode: isLinkEditMode, setIsLinkEditMode: setIsLinkEditMode }),
                React.createElement(TableActionMenuPlugin_1.default, { anchorElem: floatingAnchorElem, cellMerge: true }),
                React.createElement(FloatingTextFormatToolbarPlugin_1.default, { anchorElem: floatingAnchorElem, setIsLinkEditMode: setIsLinkEditMode })))),
        React.createElement(ActionsPlugin_1.default, { isRichText: true, shouldPreserveNewLinesInMarkdown: true })));
}

"use strict";
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_LAYOUT_COMMAND = exports.INSERT_LAYOUT_COMMAND = void 0;
exports.LayoutPlugin = LayoutPlugin;
const LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
const utils_1 = require("@lexical/utils");
const lexical_1 = require("lexical");
const react_1 = require("react");
const LayoutContainerNode_1 = require("../../nodes/LayoutContainerNode");
const LayoutItemNode_1 = require("../../nodes/LayoutItemNode");
exports.INSERT_LAYOUT_COMMAND = (0, lexical_1.createCommand)();
exports.UPDATE_LAYOUT_COMMAND = (0, lexical_1.createCommand)();
function LayoutPlugin() {
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    (0, react_1.useEffect)(() => {
        if (!editor.hasNodes([LayoutContainerNode_1.LayoutContainerNode, LayoutItemNode_1.LayoutItemNode])) {
            throw new Error('LayoutPlugin: LayoutContainerNode, or LayoutItemNode not registered on editor');
        }
        const $onEscape = (before) => {
            const selection = (0, lexical_1.$getSelection)();
            if ((0, lexical_1.$isRangeSelection)(selection) &&
                selection.isCollapsed() &&
                selection.anchor.offset === 0) {
                const container = (0, utils_1.$findMatchingParent)(selection.anchor.getNode(), LayoutContainerNode_1.$isLayoutContainerNode);
                if ((0, LayoutContainerNode_1.$isLayoutContainerNode)(container)) {
                    const parent = container.getParent();
                    const child = parent &&
                        (before
                            ? parent.getFirstChild()
                            : parent?.getLastChild());
                    const descendant = before
                        ? container.getFirstDescendant()?.getKey()
                        : container.getLastDescendant()?.getKey();
                    if (parent !== null &&
                        child === container &&
                        selection.anchor.key === descendant) {
                        if (before) {
                            container.insertBefore((0, lexical_1.$createParagraphNode)());
                        }
                        else {
                            container.insertAfter((0, lexical_1.$createParagraphNode)());
                        }
                    }
                }
            }
            return false;
        };
        return (0, utils_1.mergeRegister)(
        // When layout is the last child pressing down/right arrow will insert paragraph
        // below it to allow adding more content. It's similar what $insertBlockNode
        // (mainly for decorators), except it'll always be possible to continue adding
        // new content even if trailing paragraph is accidentally deleted
        editor.registerCommand(lexical_1.KEY_ARROW_DOWN_COMMAND, () => $onEscape(false), lexical_1.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical_1.KEY_ARROW_RIGHT_COMMAND, () => $onEscape(false), lexical_1.COMMAND_PRIORITY_LOW), 
        // When layout is the first child pressing up/left arrow will insert paragraph
        // above it to allow adding more content. It's similar what $insertBlockNode
        // (mainly for decorators), except it'll always be possible to continue adding
        // new content even if leading paragraph is accidentally deleted
        editor.registerCommand(lexical_1.KEY_ARROW_UP_COMMAND, () => $onEscape(true), lexical_1.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical_1.KEY_ARROW_LEFT_COMMAND, () => $onEscape(true), lexical_1.COMMAND_PRIORITY_LOW), editor.registerCommand(exports.INSERT_LAYOUT_COMMAND, (template) => {
            editor.update(() => {
                const container = (0, LayoutContainerNode_1.$createLayoutContainerNode)(template);
                const itemsCount = getItemsCountFromTemplate(template);
                for (let i = 0; i < itemsCount; i++) {
                    container.append((0, LayoutItemNode_1.$createLayoutItemNode)().append((0, lexical_1.$createParagraphNode)()));
                }
                (0, utils_1.$insertNodeToNearestRoot)(container);
                container.selectStart();
            });
            return true;
        }, lexical_1.COMMAND_PRIORITY_EDITOR), editor.registerCommand(exports.UPDATE_LAYOUT_COMMAND, ({ template, nodeKey }) => {
            editor.update(() => {
                const container = (0, lexical_1.$getNodeByKey)(nodeKey);
                if (!(0, LayoutContainerNode_1.$isLayoutContainerNode)(container)) {
                    return;
                }
                const itemsCount = getItemsCountFromTemplate(template);
                const prevItemsCount = getItemsCountFromTemplate(container.getTemplateColumns());
                // Add or remove extra columns if new template does not match existing one
                if (itemsCount > prevItemsCount) {
                    for (let i = prevItemsCount; i < itemsCount; i++) {
                        container.append((0, LayoutItemNode_1.$createLayoutItemNode)().append((0, lexical_1.$createParagraphNode)()));
                    }
                }
                else if (itemsCount < prevItemsCount) {
                    for (let i = prevItemsCount - 1; i >= itemsCount; i--) {
                        const layoutItem = container.getChildAtIndex(i);
                        if ((0, LayoutItemNode_1.$isLayoutItemNode)(layoutItem)) {
                            layoutItem.remove();
                        }
                    }
                }
                container.setTemplateColumns(template);
            });
            return true;
        }, lexical_1.COMMAND_PRIORITY_EDITOR), 
        // Structure enforcing transformers for each node type. In case nesting structure is not
        // "Container > Item" it'll unwrap nodes and convert it back
        // to regular content.
        editor.registerNodeTransform(LayoutItemNode_1.LayoutItemNode, (node) => {
            const parent = node.getParent();
            if (!(0, LayoutContainerNode_1.$isLayoutContainerNode)(parent)) {
                const children = node.getChildren();
                for (const child of children) {
                    node.insertBefore(child);
                }
                node.remove();
            }
        }), editor.registerNodeTransform(LayoutContainerNode_1.LayoutContainerNode, (node) => {
            const children = node.getChildren();
            if (!children.every(LayoutItemNode_1.$isLayoutItemNode)) {
                for (const child of children) {
                    node.insertBefore(child);
                }
                node.remove();
            }
        }));
    }, [editor]);
    return null;
}
function getItemsCountFromTemplate(template) {
    return template.trim().split(/\s+/).length;
}

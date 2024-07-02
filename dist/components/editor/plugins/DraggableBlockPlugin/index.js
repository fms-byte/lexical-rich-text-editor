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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DraggableBlockPlugin;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
require("./index.css");
const LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
const rich_text_1 = require("@lexical/rich-text");
const utils_1 = require("@lexical/utils");
const lexical_1 = require("lexical");
const React = __importStar(require("react"));
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const guard_1 = require("../../utils/guard");
const point_1 = require("../../utils/point");
const rect_1 = require("../../utils/rect");
const SPACE = 4;
const TARGET_LINE_HALF_HEIGHT = 2;
const DRAGGABLE_BLOCK_MENU_CLASSNAME = 'draggable-block-menu';
const DRAG_DATA_FORMAT = 'application/x-lexical-drag-block';
const TEXT_BOX_HORIZONTAL_PADDING = 28;
const Downward = 1;
const Upward = -1;
const Indeterminate = 0;
let prevIndex = Infinity;
function getCurrentIndex(keysLength) {
    if (keysLength === 0) {
        return Infinity;
    }
    if (prevIndex >= 0 && prevIndex < keysLength) {
        return prevIndex;
    }
    return Math.floor(keysLength / 2);
}
function getTopLevelNodeKeys(editor) {
    return editor.getEditorState().read(() => (0, lexical_1.$getRoot)().getChildrenKeys());
}
function getCollapsedMargins(elem) {
    const getMargin = (element, margin) => element ? parseFloat(window.getComputedStyle(element)[margin]) : 0;
    const { marginTop, marginBottom } = window.getComputedStyle(elem);
    const prevElemSiblingMarginBottom = getMargin(elem.previousElementSibling, 'marginBottom');
    const nextElemSiblingMarginTop = getMargin(elem.nextElementSibling, 'marginTop');
    const collapsedTopMargin = Math.max(parseFloat(marginTop), prevElemSiblingMarginBottom);
    const collapsedBottomMargin = Math.max(parseFloat(marginBottom), nextElemSiblingMarginTop);
    return { marginBottom: collapsedBottomMargin, marginTop: collapsedTopMargin };
}
function getBlockElement(anchorElem, editor, event, useEdgeAsDefault = false) {
    const anchorElementRect = anchorElem.getBoundingClientRect();
    const topLevelNodeKeys = getTopLevelNodeKeys(editor);
    let blockElem = null;
    editor.getEditorState().read(() => {
        if (useEdgeAsDefault) {
            const [firstNode, lastNode] = [
                editor.getElementByKey(topLevelNodeKeys[0]),
                editor.getElementByKey(topLevelNodeKeys[topLevelNodeKeys.length - 1]),
            ];
            const [firstNodeRect, lastNodeRect] = [
                firstNode?.getBoundingClientRect(),
                lastNode?.getBoundingClientRect(),
            ];
            if (firstNodeRect && lastNodeRect) {
                const firstNodeZoom = (0, utils_1.calculateZoomLevel)(firstNode);
                const lastNodeZoom = (0, utils_1.calculateZoomLevel)(lastNode);
                if (event.y / firstNodeZoom < firstNodeRect.top) {
                    blockElem = firstNode;
                }
                else if (event.y / lastNodeZoom > lastNodeRect.bottom) {
                    blockElem = lastNode;
                }
                if (blockElem) {
                    return;
                }
            }
        }
        let index = getCurrentIndex(topLevelNodeKeys.length);
        let direction = Indeterminate;
        while (index >= 0 && index < topLevelNodeKeys.length) {
            const key = topLevelNodeKeys[index];
            const elem = editor.getElementByKey(key);
            if (elem === null) {
                break;
            }
            const zoom = (0, utils_1.calculateZoomLevel)(elem);
            const point = new point_1.Point(event.x / zoom, event.y / zoom);
            const domRect = rect_1.Rect.fromDOM(elem);
            const { marginTop, marginBottom } = getCollapsedMargins(elem);
            const rect = domRect.generateNewRect({
                bottom: domRect.bottom + marginBottom,
                left: anchorElementRect.left,
                right: anchorElementRect.right,
                top: domRect.top - marginTop,
            });
            const { result, reason: { isOnTopSide, isOnBottomSide }, } = rect.contains(point);
            if (result) {
                blockElem = elem;
                prevIndex = index;
                break;
            }
            if (direction === Indeterminate) {
                if (isOnTopSide) {
                    direction = Upward;
                }
                else if (isOnBottomSide) {
                    direction = Downward;
                }
                else {
                    // stop search block element
                    direction = Infinity;
                }
            }
            index += direction;
        }
    });
    return blockElem;
}
function isOnMenu(element) {
    return !!element.closest(`.${DRAGGABLE_BLOCK_MENU_CLASSNAME}`);
}
function setMenuPosition(targetElem, floatingElem, anchorElem) {
    if (!targetElem) {
        floatingElem.style.opacity = '0';
        floatingElem.style.transform = 'translate(-10000px, -10000px)';
        return;
    }
    const targetRect = targetElem.getBoundingClientRect();
    const targetStyle = window.getComputedStyle(targetElem);
    const floatingElemRect = floatingElem.getBoundingClientRect();
    const anchorElementRect = anchorElem.getBoundingClientRect();
    const top = targetRect.top +
        (parseInt(targetStyle.lineHeight, 10) - floatingElemRect.height) / 2 -
        anchorElementRect.top;
    const left = SPACE;
    floatingElem.style.opacity = '1';
    floatingElem.style.transform = `translate(${left}px, ${top}px)`;
}
function setDragImage(dataTransfer, draggableBlockElem) {
    const { transform } = draggableBlockElem.style;
    // Remove dragImage borders
    draggableBlockElem.style.transform = 'translateZ(0)';
    dataTransfer.setDragImage(draggableBlockElem, 0, 0);
    setTimeout(() => {
        draggableBlockElem.style.transform = transform;
    });
}
function setTargetLine(targetLineElem, targetBlockElem, mouseY, anchorElem) {
    const { top: targetBlockElemTop, height: targetBlockElemHeight } = targetBlockElem.getBoundingClientRect();
    const { top: anchorTop, width: anchorWidth } = anchorElem.getBoundingClientRect();
    const { marginTop, marginBottom } = getCollapsedMargins(targetBlockElem);
    let lineTop = targetBlockElemTop;
    if (mouseY >= targetBlockElemTop) {
        lineTop += targetBlockElemHeight + marginBottom / 2;
    }
    else {
        lineTop -= marginTop / 2;
    }
    const top = lineTop - anchorTop - TARGET_LINE_HALF_HEIGHT;
    const left = TEXT_BOX_HORIZONTAL_PADDING - SPACE;
    targetLineElem.style.transform = `translate(${left}px, ${top}px)`;
    targetLineElem.style.width = `${anchorWidth - (TEXT_BOX_HORIZONTAL_PADDING - SPACE) * 2}px`;
    targetLineElem.style.opacity = '.4';
}
function hideTargetLine(targetLineElem) {
    if (targetLineElem) {
        targetLineElem.style.opacity = '0';
        targetLineElem.style.transform = 'translate(-10000px, -10000px)';
    }
}
function useDraggableBlockMenu(editor, anchorElem, isEditable) {
    const scrollerElem = anchorElem.parentElement;
    const menuRef = (0, react_1.useRef)(null);
    const targetLineRef = (0, react_1.useRef)(null);
    const isDraggingBlockRef = (0, react_1.useRef)(false);
    const [draggableBlockElem, setDraggableBlockElem] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        function onMouseMove(event) {
            const target = event.target;
            if (!(0, guard_1.isHTMLElement)(target)) {
                setDraggableBlockElem(null);
                return;
            }
            if (isOnMenu(target)) {
                return;
            }
            const _draggableBlockElem = getBlockElement(anchorElem, editor, event);
            setDraggableBlockElem(_draggableBlockElem);
        }
        function onMouseLeave() {
            setDraggableBlockElem(null);
        }
        scrollerElem?.addEventListener('mousemove', onMouseMove);
        scrollerElem?.addEventListener('mouseleave', onMouseLeave);
        return () => {
            scrollerElem?.removeEventListener('mousemove', onMouseMove);
            scrollerElem?.removeEventListener('mouseleave', onMouseLeave);
        };
    }, [scrollerElem, anchorElem, editor]);
    (0, react_1.useEffect)(() => {
        if (menuRef.current) {
            setMenuPosition(draggableBlockElem, menuRef.current, anchorElem);
        }
    }, [anchorElem, draggableBlockElem]);
    (0, react_1.useEffect)(() => {
        function onDragover(event) {
            if (!isDraggingBlockRef.current) {
                return false;
            }
            const [isFileTransfer] = (0, rich_text_1.eventFiles)(event);
            if (isFileTransfer) {
                return false;
            }
            const { pageY, target } = event;
            if (!(0, guard_1.isHTMLElement)(target)) {
                return false;
            }
            const targetBlockElem = getBlockElement(anchorElem, editor, event, true);
            const targetLineElem = targetLineRef.current;
            if (targetBlockElem === null || targetLineElem === null) {
                return false;
            }
            setTargetLine(targetLineElem, targetBlockElem, pageY / (0, utils_1.calculateZoomLevel)(target), anchorElem);
            // Prevent default event to be able to trigger onDrop events
            event.preventDefault();
            return true;
        }
        function $onDrop(event) {
            if (!isDraggingBlockRef.current) {
                return false;
            }
            const [isFileTransfer] = (0, rich_text_1.eventFiles)(event);
            if (isFileTransfer) {
                return false;
            }
            const { target, dataTransfer, pageY } = event;
            const dragData = dataTransfer?.getData(DRAG_DATA_FORMAT) || '';
            const draggedNode = (0, lexical_1.$getNodeByKey)(dragData);
            if (!draggedNode) {
                return false;
            }
            if (!(0, guard_1.isHTMLElement)(target)) {
                return false;
            }
            const targetBlockElem = getBlockElement(anchorElem, editor, event, true);
            if (!targetBlockElem) {
                return false;
            }
            const targetNode = (0, lexical_1.$getNearestNodeFromDOMNode)(targetBlockElem);
            if (!targetNode) {
                return false;
            }
            if (targetNode === draggedNode) {
                return true;
            }
            const targetBlockElemTop = targetBlockElem.getBoundingClientRect().top;
            if (pageY / (0, utils_1.calculateZoomLevel)(target) >= targetBlockElemTop) {
                targetNode.insertAfter(draggedNode);
            }
            else {
                targetNode.insertBefore(draggedNode);
            }
            setDraggableBlockElem(null);
            return true;
        }
        return (0, utils_1.mergeRegister)(editor.registerCommand(lexical_1.DRAGOVER_COMMAND, (event) => {
            return onDragover(event);
        }, lexical_1.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical_1.DROP_COMMAND, (event) => {
            return $onDrop(event);
        }, lexical_1.COMMAND_PRIORITY_HIGH));
    }, [anchorElem, editor]);
    function onDragStart(event) {
        const dataTransfer = event.dataTransfer;
        if (!dataTransfer || !draggableBlockElem) {
            return;
        }
        setDragImage(dataTransfer, draggableBlockElem);
        let nodeKey = '';
        editor.update(() => {
            const node = (0, lexical_1.$getNearestNodeFromDOMNode)(draggableBlockElem);
            if (node) {
                nodeKey = node.getKey();
            }
        });
        isDraggingBlockRef.current = true;
        dataTransfer.setData(DRAG_DATA_FORMAT, nodeKey);
    }
    function onDragEnd() {
        isDraggingBlockRef.current = false;
        hideTargetLine(targetLineRef.current);
    }
    return (0, react_dom_1.createPortal)(React.createElement(React.Fragment, null,
        React.createElement("div", { className: "icon draggable-block-menu", ref: menuRef, draggable: true, onDragStart: onDragStart, onDragEnd: onDragEnd },
            React.createElement("div", { className: isEditable ? 'icon' : '' })),
        React.createElement("div", { className: "draggable-block-target-line", ref: targetLineRef })), anchorElem);
}
function DraggableBlockPlugin({ anchorElem = document.body, }) {
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    return useDraggableBlockMenu(editor, anchorElem, editor._editable);
}

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
exports.default = TableCellResizerPlugin;
require("./index.css");
const LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
const useLexicalEditable_1 = __importDefault(require("@lexical/react/useLexicalEditable"));
const table_1 = require("@lexical/table");
const utils_1 = require("@lexical/utils");
const lexical_1 = require("lexical");
const React = __importStar(require("react"));
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const MIN_ROW_HEIGHT = 33;
const MIN_COLUMN_WIDTH = 50;
function TableCellResizer({ editor }) {
    const targetRef = (0, react_1.useRef)(null);
    const resizerRef = (0, react_1.useRef)(null);
    const tableRectRef = (0, react_1.useRef)(null);
    const mouseStartPosRef = (0, react_1.useRef)(null);
    const [mouseCurrentPos, updateMouseCurrentPos] = (0, react_1.useState)(null);
    const [activeCell, updateActiveCell] = (0, react_1.useState)(null);
    const [isMouseDown, updateIsMouseDown] = (0, react_1.useState)(false);
    const [draggingDirection, updateDraggingDirection] = (0, react_1.useState)(null);
    const resetState = (0, react_1.useCallback)(() => {
        updateActiveCell(null);
        targetRef.current = null;
        updateDraggingDirection(null);
        mouseStartPosRef.current = null;
        tableRectRef.current = null;
    }, []);
    const isMouseDownOnEvent = (event) => {
        return (event.buttons & 1) === 1;
    };
    (0, react_1.useEffect)(() => {
        const onMouseMove = (event) => {
            setTimeout(() => {
                const target = event.target;
                if (draggingDirection) {
                    updateMouseCurrentPos({
                        x: event.clientX,
                        y: event.clientY,
                    });
                    return;
                }
                updateIsMouseDown(isMouseDownOnEvent(event));
                if (resizerRef.current && resizerRef.current.contains(target)) {
                    return;
                }
                if (targetRef.current !== target) {
                    targetRef.current = target;
                    const cell = (0, table_1.getDOMCellFromTarget)(target);
                    if (cell && activeCell !== cell) {
                        editor.update(() => {
                            const tableCellNode = (0, lexical_1.$getNearestNodeFromDOMNode)(cell.elem);
                            if (!tableCellNode) {
                                throw new Error('TableCellResizer: Table cell node not found.');
                            }
                            const tableNode = (0, table_1.$getTableNodeFromLexicalNodeOrThrow)(tableCellNode);
                            const tableElement = editor.getElementByKey(tableNode.getKey());
                            if (!tableElement) {
                                throw new Error('TableCellResizer: Table element not found.');
                            }
                            targetRef.current = target;
                            tableRectRef.current = tableElement.getBoundingClientRect();
                            updateActiveCell(cell);
                        });
                    }
                    else if (cell == null) {
                        resetState();
                    }
                }
            }, 0);
        };
        const onMouseDown = (event) => {
            setTimeout(() => {
                updateIsMouseDown(true);
            }, 0);
        };
        const onMouseUp = (event) => {
            setTimeout(() => {
                updateIsMouseDown(false);
            }, 0);
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
        };
    }, [activeCell, draggingDirection, editor, resetState]);
    const isHeightChanging = (direction) => {
        if (direction === 'bottom') {
            return true;
        }
        return false;
    };
    const updateRowHeight = (0, react_1.useCallback)((heightChange) => {
        if (!activeCell) {
            throw new Error('TableCellResizer: Expected active cell.');
        }
        editor.update(() => {
            const tableCellNode = (0, lexical_1.$getNearestNodeFromDOMNode)(activeCell.elem);
            if (!(0, table_1.$isTableCellNode)(tableCellNode)) {
                throw new Error('TableCellResizer: Table cell node not found.');
            }
            const tableNode = (0, table_1.$getTableNodeFromLexicalNodeOrThrow)(tableCellNode);
            const tableRowIndex = (0, table_1.$getTableRowIndexFromTableCellNode)(tableCellNode);
            const tableRows = tableNode.getChildren();
            if (tableRowIndex >= tableRows.length || tableRowIndex < 0) {
                throw new Error('Expected table cell to be inside of table row.');
            }
            const tableRow = tableRows[tableRowIndex];
            if (!(0, table_1.$isTableRowNode)(tableRow)) {
                throw new Error('Expected table row');
            }
            let height = tableRow.getHeight();
            if (height === undefined) {
                const rowCells = tableRow.getChildren();
                height = Math.min(...rowCells.map((cell) => getCellNodeHeight(cell, editor) ?? Infinity));
            }
            const newHeight = Math.max(height + heightChange, MIN_ROW_HEIGHT);
            tableRow.setHeight(newHeight);
        }, { tag: 'skip-scroll-into-view' });
    }, [activeCell, editor]);
    const getCellNodeWidth = (cell, activeEditor) => {
        const width = cell.getWidth();
        if (width !== undefined) {
            return width;
        }
        const domCellNode = activeEditor.getElementByKey(cell.getKey());
        if (domCellNode == null) {
            return undefined;
        }
        const computedStyle = getComputedStyle(domCellNode);
        return (domCellNode.clientWidth -
            parseFloat(computedStyle.paddingLeft) -
            parseFloat(computedStyle.paddingRight));
    };
    const getCellNodeHeight = (cell, activeEditor) => {
        const domCellNode = activeEditor.getElementByKey(cell.getKey());
        return domCellNode?.clientHeight;
    };
    const getCellColumnIndex = (tableCellNode, tableMap) => {
        for (let row = 0; row < tableMap.length; row++) {
            for (let column = 0; column < tableMap[row].length; column++) {
                if (tableMap[row][column].cell === tableCellNode) {
                    return column;
                }
            }
        }
    };
    const updateColumnWidth = (0, react_1.useCallback)((widthChange) => {
        if (!activeCell) {
            throw new Error('TableCellResizer: Expected active cell.');
        }
        editor.update(() => {
            const tableCellNode = (0, lexical_1.$getNearestNodeFromDOMNode)(activeCell.elem);
            if (!(0, table_1.$isTableCellNode)(tableCellNode)) {
                throw new Error('TableCellResizer: Table cell node not found.');
            }
            const tableNode = (0, table_1.$getTableNodeFromLexicalNodeOrThrow)(tableCellNode);
            const [tableMap] = (0, table_1.$computeTableMapSkipCellCheck)(tableNode, null, null);
            const columnIndex = getCellColumnIndex(tableCellNode, tableMap);
            if (columnIndex === undefined) {
                throw new Error('TableCellResizer: Table column not found.');
            }
            for (let row = 0; row < tableMap.length; row++) {
                const cell = tableMap[row][columnIndex];
                if (cell.startRow === row &&
                    (columnIndex === tableMap[row].length - 1 ||
                        tableMap[row][columnIndex].cell !==
                            tableMap[row][columnIndex + 1].cell)) {
                    const width = getCellNodeWidth(cell.cell, editor);
                    if (width === undefined) {
                        continue;
                    }
                    const newWidth = Math.max(width + widthChange, MIN_COLUMN_WIDTH);
                    cell.cell.setWidth(newWidth);
                }
            }
        }, { tag: 'skip-scroll-into-view' });
    }, [activeCell, editor]);
    const mouseUpHandler = (0, react_1.useCallback)((direction) => {
        const handler = (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (!activeCell) {
                throw new Error('TableCellResizer: Expected active cell.');
            }
            if (mouseStartPosRef.current) {
                const { x, y } = mouseStartPosRef.current;
                if (activeCell === null) {
                    return;
                }
                const zoom = (0, utils_1.calculateZoomLevel)(event.target);
                if (isHeightChanging(direction)) {
                    const heightChange = (event.clientY - y) / zoom;
                    updateRowHeight(heightChange);
                }
                else {
                    const widthChange = (event.clientX - x) / zoom;
                    updateColumnWidth(widthChange);
                }
                resetState();
                document.removeEventListener('mouseup', handler);
            }
        };
        return handler;
    }, [activeCell, resetState, updateColumnWidth, updateRowHeight]);
    const toggleResize = (0, react_1.useCallback)((direction) => (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!activeCell) {
            throw new Error('TableCellResizer: Expected active cell.');
        }
        mouseStartPosRef.current = {
            x: event.clientX,
            y: event.clientY,
        };
        updateMouseCurrentPos(mouseStartPosRef.current);
        updateDraggingDirection(direction);
        document.addEventListener('mouseup', mouseUpHandler(direction));
    }, [activeCell, mouseUpHandler]);
    const getResizers = (0, react_1.useCallback)(() => {
        if (activeCell) {
            const { height, width, top, left } = activeCell.elem.getBoundingClientRect();
            const zoom = (0, utils_1.calculateZoomLevel)(activeCell.elem);
            const zoneWidth = 10; // Pixel width of the zone where you can drag the edge
            const styles = {
                bottom: {
                    backgroundColor: 'none',
                    cursor: 'row-resize',
                    height: `${zoneWidth}px`,
                    left: `${window.pageXOffset + left}px`,
                    top: `${window.pageYOffset + top + height - zoneWidth / 2}px`,
                    width: `${width}px`,
                },
                right: {
                    backgroundColor: 'none',
                    cursor: 'col-resize',
                    height: `${height}px`,
                    left: `${window.pageXOffset + left + width - zoneWidth / 2}px`,
                    top: `${window.pageYOffset + top}px`,
                    width: `${zoneWidth}px`,
                },
            };
            const tableRect = tableRectRef.current;
            if (draggingDirection && mouseCurrentPos && tableRect) {
                if (isHeightChanging(draggingDirection)) {
                    styles[draggingDirection].left = `${window.pageXOffset + tableRect.left}px`;
                    styles[draggingDirection].top = `${window.pageYOffset + mouseCurrentPos.y / zoom}px`;
                    styles[draggingDirection].height = '3px';
                    styles[draggingDirection].width = `${tableRect.width}px`;
                }
                else {
                    styles[draggingDirection].top = `${window.pageYOffset + tableRect.top}px`;
                    styles[draggingDirection].left = `${window.pageXOffset + mouseCurrentPos.x / zoom}px`;
                    styles[draggingDirection].width = '3px';
                    styles[draggingDirection].height = `${tableRect.height}px`;
                }
                styles[draggingDirection].backgroundColor = '#adf';
            }
            return styles;
        }
        return {
            bottom: null,
            left: null,
            right: null,
            top: null,
        };
    }, [activeCell, draggingDirection, mouseCurrentPos]);
    const resizerStyles = getResizers();
    return (React.createElement("div", { ref: resizerRef }, activeCell != null && !isMouseDown && (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "TableCellResizer__resizer TableCellResizer__ui", style: resizerStyles.right || undefined, onMouseDown: toggleResize('right') }),
        React.createElement("div", { className: "TableCellResizer__resizer TableCellResizer__ui", style: resizerStyles.bottom || undefined, onMouseDown: toggleResize('bottom') })))));
}
function TableCellResizerPlugin() {
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    const isEditable = (0, useLexicalEditable_1.default)();
    return (0, react_1.useMemo)(() => isEditable
        ? (0, react_dom_1.createPortal)(React.createElement(TableCellResizer, { editor: editor }), document.body)
        : null, [editor, isEditable]);
}

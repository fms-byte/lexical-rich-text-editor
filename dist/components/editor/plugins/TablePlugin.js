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
exports.CellContext = exports.INSERT_NEW_TABLE_COMMAND = void 0;
exports.TableContext = TableContext;
exports.InsertTableDialog = InsertTableDialog;
exports.TablePlugin = TablePlugin;
const LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
const table_1 = require("@lexical/table");
const lexical_1 = require("lexical");
const react_1 = require("react");
const React = __importStar(require("react"));
const invariant_1 = __importDefault(require("../shared/invariant"));
const Button_1 = __importDefault(require("../ui/Button"));
const Dialog_1 = require("../ui/Dialog");
const TextInput_1 = __importDefault(require("../ui/TextInput"));
exports.INSERT_NEW_TABLE_COMMAND = (0, lexical_1.createCommand)('INSERT_NEW_TABLE_COMMAND');
exports.CellContext = (0, react_1.createContext)({
    cellEditorConfig: null,
    cellEditorPlugins: null,
    set: () => {
        // Empty
    },
});
function TableContext({ children }) {
    const [contextValue, setContextValue] = (0, react_1.useState)({
        cellEditorConfig: null,
        cellEditorPlugins: null,
    });
    return (React.createElement(exports.CellContext.Provider, { value: (0, react_1.useMemo)(() => ({
            cellEditorConfig: contextValue.cellEditorConfig,
            cellEditorPlugins: contextValue.cellEditorPlugins,
            set: (cellEditorConfig, cellEditorPlugins) => {
                setContextValue({ cellEditorConfig, cellEditorPlugins });
            },
        }), [contextValue.cellEditorConfig, contextValue.cellEditorPlugins]) }, children));
}
function InsertTableDialog({ activeEditor, onClose, }) {
    const [rows, setRows] = (0, react_1.useState)('5');
    const [columns, setColumns] = (0, react_1.useState)('5');
    const [isDisabled, setIsDisabled] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        const row = Number(rows);
        const column = Number(columns);
        if (row && row > 0 && row <= 500 && column && column > 0 && column <= 50) {
            setIsDisabled(false);
        }
        else {
            setIsDisabled(true);
        }
    }, [rows, columns]);
    const onClick = () => {
        activeEditor.dispatchCommand(table_1.INSERT_TABLE_COMMAND, {
            columns,
            rows,
        });
        onClose();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(TextInput_1.default, { placeholder: '# of rows (1-500)', label: "Rows", onChange: setRows, value: rows, "data-test-id": "table-modal-rows", type: "number" }),
        React.createElement(TextInput_1.default, { placeholder: '# of columns (1-50)', label: "Columns", onChange: setColumns, value: columns, "data-test-id": "table-modal-columns", type: "number" }),
        React.createElement(Dialog_1.DialogActions, { "data-test-id": "table-model-confirm-insert" },
            React.createElement(Button_1.default, { disabled: isDisabled, onClick: onClick }, "Confirm"))));
}
function TablePlugin({ cellEditorConfig, children, }) {
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    const cellContext = (0, react_1.useContext)(exports.CellContext);
    (0, react_1.useEffect)(() => {
        if (!editor.hasNodes([table_1.TableNode])) {
            (0, invariant_1.default)(false, 'TablePlugin: TableNode is not registered on editor');
        }
        cellContext.set(cellEditorConfig, children);
        return editor.registerCommand(exports.INSERT_NEW_TABLE_COMMAND, ({ columns, rows, includeHeaders }) => {
            const tableNode = (0, table_1.$createTableNodeWithDimensions)(Number(rows), Number(columns), includeHeaders);
            (0, lexical_1.$insertNodes)([tableNode]);
            return true;
        }, lexical_1.COMMAND_PRIORITY_EDITOR);
    }, [cellContext, cellEditorConfig, children, editor]);
    return null;
}

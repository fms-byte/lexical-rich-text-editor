"use strict";
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ActionsPlugin;
const react_1 = __importDefault(require("react"));
const file_1 = require("@lexical/file");
const LexicalCollaborationContext_1 = require("@lexical/react/LexicalCollaborationContext");
const LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
const utils_1 = require("@lexical/utils");
const yjs_1 = require("@lexical/yjs");
const lexical_1 = require("lexical");
const react_2 = require("react");
const useFlashMessage_1 = __importDefault(require("../../hooks/useFlashMessage"));
const useModal_1 = __importDefault(require("../../hooks/useModal"));
const Button_1 = __importDefault(require("../../ui/Button"));
const docSerialization_1 = require("../../utils/docSerialization");
async function sendEditorState(editor) {
    const stringifiedEditorState = JSON.stringify(editor.getEditorState());
    try {
        await fetch('http://localhost:1235/setEditorState', {
            body: stringifiedEditorState,
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            method: 'POST',
        });
    }
    catch {
        // NO-OP
    }
}
async function validateEditorState(editor) {
    const stringifiedEditorState = JSON.stringify(editor.getEditorState());
    let response = null;
    try {
        response = await fetch('http://localhost:1235/validateEditorState', {
            body: stringifiedEditorState,
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            method: 'POST',
        });
    }
    catch {
        // NO-OP
    }
    if (response !== null && response.status === 403) {
        throw new Error('Editor state validation failed! Server did not accept changes.');
    }
}
async function shareDoc(doc) {
    const url = new URL(window.location.toString());
    url.hash = await (0, docSerialization_1.docToHash)(doc);
    const newUrl = url.toString();
    window.history.replaceState({}, '', newUrl);
    await window.navigator.clipboard.writeText(newUrl);
}
function ActionsPlugin({ isRichText, shouldPreserveNewLinesInMarkdown, }) {
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    const [isEditable, setIsEditable] = (0, react_2.useState)(() => editor.isEditable());
    const [isSpeechToText, setIsSpeechToText] = (0, react_2.useState)(false);
    const [connected, setConnected] = (0, react_2.useState)(false);
    const [isEditorEmpty, setIsEditorEmpty] = (0, react_2.useState)(true);
    const [modal, showModal] = (0, useModal_1.default)();
    const showFlashMessage = (0, useFlashMessage_1.default)();
    const { isCollabActive } = (0, LexicalCollaborationContext_1.useCollaborationContext)();
    (0, react_2.useEffect)(() => {
        (0, docSerialization_1.docFromHash)(window.location.hash).then((doc) => {
            if (doc && doc.source === 'Playground') {
                editor.setEditorState((0, file_1.editorStateFromSerializedDocument)(editor, doc));
                editor.dispatchCommand(lexical_1.CLEAR_HISTORY_COMMAND, undefined);
            }
        });
    }, [editor]);
    (0, react_2.useEffect)(() => {
        return (0, utils_1.mergeRegister)(editor.registerEditableListener((editable) => {
            setIsEditable(editable);
        }), editor.registerCommand(yjs_1.CONNECTED_COMMAND, (payload) => {
            const isConnected = payload;
            setConnected(isConnected);
            return false;
        }, lexical_1.COMMAND_PRIORITY_EDITOR));
    }, [editor]);
    (0, react_2.useEffect)(() => {
        return editor.registerUpdateListener(({ dirtyElements, prevEditorState, tags }) => {
            // If we are in read only mode, send the editor state
            // to server and ask for validation if possible.
            if (!isEditable &&
                dirtyElements.size > 0 &&
                !tags.has('historic') &&
                !tags.has('collaboration')) {
                validateEditorState(editor);
            }
            editor.getEditorState().read(() => {
                const root = (0, lexical_1.$getRoot)();
                const children = root.getChildren();
                if (children.length > 1) {
                    setIsEditorEmpty(false);
                }
                else {
                    if ((0, lexical_1.$isParagraphNode)(children[0])) {
                        const paragraphChildren = children[0].getChildren();
                        setIsEditorEmpty(paragraphChildren.length === 0);
                    }
                    else {
                        setIsEditorEmpty(false);
                    }
                }
            });
        });
    }, [editor, isEditable]);
    return (react_1.default.createElement("div", { className: "actions" },
        react_1.default.createElement("div", { className: "action-button clear", 
            //disabled={isEditorEmpty}
            onClick: () => {
                showModal('Clear editor', (onClose) => (react_1.default.createElement(ShowClearDialog, { editor: editor, onClose: onClose })));
            }, title: "Clear", "aria-label": "Clear editor contents" },
            react_1.default.createElement("i", { className: "clear" })),
        modal));
}
function ShowClearDialog({ editor, onClose, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        "Are you sure you want to clear the editor?",
        react_1.default.createElement("div", { className: "Modal__content" },
            react_1.default.createElement(Button_1.default, { onClick: () => {
                    editor.dispatchCommand(lexical_1.CLEAR_EDITOR_COMMAND, undefined);
                    editor.focus();
                    onClose();
                } }, "Clear"),
            ' ',
            react_1.default.createElement(Button_1.default, { onClick: () => {
                    editor.focus();
                    onClose();
                } }, "Cancel"))));
}

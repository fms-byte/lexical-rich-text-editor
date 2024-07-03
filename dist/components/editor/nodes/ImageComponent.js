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
exports.RIGHT_CLICK_IMAGE_COMMAND = void 0;
exports.default = ImageComponent;
require("./ImageNode.css");
const LexicalAutoFocusPlugin_1 = require("@lexical/react/LexicalAutoFocusPlugin");
const LexicalCollaborationContext_1 = require("@lexical/react/LexicalCollaborationContext");
const LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
const LexicalErrorBoundary_1 = __importDefault(require("@lexical/react/LexicalErrorBoundary"));
const LexicalHashtagPlugin_1 = require("@lexical/react/LexicalHashtagPlugin");
const LexicalHistoryPlugin_1 = require("@lexical/react/LexicalHistoryPlugin");
const LexicalNestedComposer_1 = require("@lexical/react/LexicalNestedComposer");
const LexicalRichTextPlugin_1 = require("@lexical/react/LexicalRichTextPlugin");
const useLexicalNodeSelection_1 = require("@lexical/react/useLexicalNodeSelection");
const utils_1 = require("@lexical/utils");
const lexical_1 = require("lexical");
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const SharedHistoryContext_1 = require("../context/SharedHistoryContext");
const image_broken_svg_1 = __importDefault(require("../../../images/image-broken.svg"));
const EmojisPlugin_1 = __importDefault(require("../plugins/EmojisPlugin"));
const KeywordsPlugin_1 = __importDefault(require("../plugins/KeywordsPlugin"));
const LinkPlugin_1 = __importDefault(require("../plugins/LinkPlugin"));
const MentionsPlugin_1 = __importDefault(require("../plugins/MentionsPlugin"));
const TreeViewPlugin_1 = __importDefault(require("../plugins/TreeViewPlugin"));
const ContentEditable_1 = __importDefault(require("../ui/ContentEditable"));
const ImageResizer_1 = __importDefault(require("../ui/ImageResizer"));
const Placeholder_1 = __importDefault(require("../ui/Placeholder"));
const ImageNode_1 = require("./ImageNode");
const imageCache = new Set();
exports.RIGHT_CLICK_IMAGE_COMMAND = (0, lexical_1.createCommand)('RIGHT_CLICK_IMAGE_COMMAND');
function useSuspenseImage(src) {
    if (!imageCache.has(src)) {
        throw new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                imageCache.add(src);
                resolve(null);
            };
            img.onerror = () => {
                imageCache.add(src);
            };
        });
    }
}
function LazyImage({ altText, className, imageRef, src, width, height, maxWidth, onError, }) {
    useSuspenseImage(src);
    return (react_1.default.createElement("img", { className: className || undefined, src: src, alt: altText, ref: imageRef, style: {
            height,
            maxWidth,
            width,
        }, onError: onError, draggable: "false" }));
}
function BrokenImage() {
    return (react_1.default.createElement("img", { alt: 'Broken image icon', src: image_broken_svg_1.default, className: 'opacity-50', height: 200, width: 200, draggable: "false" }));
}
function ImageComponent({ src, altText, nodeKey, width, height, maxWidth, resizable, showCaption, caption, captionsEnabled, }) {
    const imageRef = (0, react_2.useRef)(null);
    const buttonRef = (0, react_2.useRef)(null);
    const [isSelected, setSelected, clearSelection] = (0, useLexicalNodeSelection_1.useLexicalNodeSelection)(nodeKey);
    const [isResizing, setIsResizing] = (0, react_2.useState)(false);
    const { isCollabActive } = (0, LexicalCollaborationContext_1.useCollaborationContext)();
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    const [selection, setSelection] = (0, react_2.useState)(null);
    const activeEditorRef = (0, react_2.useRef)(null);
    const [isLoadError, setIsLoadError] = (0, react_2.useState)(false);
    const $onDelete = (0, react_2.useCallback)((payload) => {
        if (isSelected && (0, lexical_1.$isNodeSelection)((0, lexical_1.$getSelection)())) {
            const event = payload;
            event.preventDefault();
            const node = (0, lexical_1.$getNodeByKey)(nodeKey);
            if ((0, ImageNode_1.$isImageNode)(node)) {
                node.remove();
                return true;
            }
        }
        return false;
    }, [isSelected, nodeKey]);
    const $onEnter = (0, react_2.useCallback)((event) => {
        const latestSelection = (0, lexical_1.$getSelection)();
        const buttonElem = buttonRef.current;
        if (isSelected &&
            (0, lexical_1.$isNodeSelection)(latestSelection) &&
            latestSelection.getNodes().length === 1) {
            if (showCaption) {
                // Move focus into nested editor
                (0, lexical_1.$setSelection)(null);
                event.preventDefault();
                caption.focus();
                return true;
            }
            else if (buttonElem !== null &&
                buttonElem !== document.activeElement) {
                event.preventDefault();
                buttonElem.focus();
                return true;
            }
        }
        return false;
    }, [caption, isSelected, showCaption]);
    const $onEscape = (0, react_2.useCallback)((event) => {
        if (activeEditorRef.current === caption ||
            buttonRef.current === event.target) {
            (0, lexical_1.$setSelection)(null);
            editor.update(() => {
                setSelected(true);
                const parentRootElement = editor.getRootElement();
                if (parentRootElement !== null) {
                    parentRootElement.focus();
                }
            });
            return true;
        }
        return false;
    }, [caption, editor, setSelected]);
    const onClick = (0, react_2.useCallback)((payload) => {
        const event = payload;
        if (isResizing) {
            return true;
        }
        if (event.target === imageRef.current) {
            if (event.shiftKey) {
                setSelected(!isSelected);
            }
            else {
                clearSelection();
                setSelected(true);
            }
            return true;
        }
        return false;
    }, [isResizing, isSelected, setSelected, clearSelection]);
    const onRightClick = (0, react_2.useCallback)((event) => {
        editor.getEditorState().read(() => {
            const latestSelection = (0, lexical_1.$getSelection)();
            const domElement = event.target;
            if (domElement.tagName === 'IMG' &&
                (0, lexical_1.$isRangeSelection)(latestSelection) &&
                latestSelection.getNodes().length === 1) {
                editor.dispatchCommand(exports.RIGHT_CLICK_IMAGE_COMMAND, event);
            }
        });
    }, [editor]);
    (0, react_2.useEffect)(() => {
        let isMounted = true;
        const rootElement = editor.getRootElement();
        const unregister = (0, utils_1.mergeRegister)(editor.registerUpdateListener(({ editorState }) => {
            if (isMounted) {
                setSelection(editorState.read(() => (0, lexical_1.$getSelection)()));
            }
        }), editor.registerCommand(lexical_1.SELECTION_CHANGE_COMMAND, (_, activeEditor) => {
            activeEditorRef.current = activeEditor;
            return false;
        }, lexical_1.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical_1.CLICK_COMMAND, onClick, lexical_1.COMMAND_PRIORITY_LOW), editor.registerCommand(exports.RIGHT_CLICK_IMAGE_COMMAND, onClick, lexical_1.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical_1.DRAGSTART_COMMAND, (event) => {
            if (event.target === imageRef.current) {
                // TODO This is just a temporary workaround for FF to behave like other browsers.
                // Ideally, this handles drag & drop too (and all browsers).
                event.preventDefault();
                return true;
            }
            return false;
        }, lexical_1.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical_1.KEY_DELETE_COMMAND, $onDelete, lexical_1.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical_1.KEY_BACKSPACE_COMMAND, $onDelete, lexical_1.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical_1.KEY_ENTER_COMMAND, $onEnter, lexical_1.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical_1.KEY_ESCAPE_COMMAND, $onEscape, lexical_1.COMMAND_PRIORITY_LOW));
        rootElement === null || rootElement === void 0 ? void 0 : rootElement.addEventListener('contextmenu', onRightClick);
        return () => {
            isMounted = false;
            unregister();
            rootElement === null || rootElement === void 0 ? void 0 : rootElement.removeEventListener('contextmenu', onRightClick);
        };
    }, [
        clearSelection,
        editor,
        isResizing,
        isSelected,
        nodeKey,
        $onDelete,
        $onEnter,
        $onEscape,
        onClick,
        onRightClick,
        setSelected,
    ]);
    const setShowCaption = () => {
        editor.update(() => {
            const node = (0, lexical_1.$getNodeByKey)(nodeKey);
            if ((0, ImageNode_1.$isImageNode)(node)) {
                node.setShowCaption(true);
            }
        });
    };
    const onResizeEnd = (nextWidth, nextHeight) => {
        // Delay hiding the resize bars for click case
        setTimeout(() => {
            setIsResizing(false);
        }, 200);
        editor.update(() => {
            const node = (0, lexical_1.$getNodeByKey)(nodeKey);
            if ((0, ImageNode_1.$isImageNode)(node)) {
                node.setWidthAndHeight(nextWidth, nextHeight);
            }
        });
    };
    const onResizeStart = () => {
        setIsResizing(true);
    };
    const { historyState } = (0, SharedHistoryContext_1.useSharedHistoryContext)();
    const draggable = isSelected && (0, lexical_1.$isNodeSelection)(selection) && !isResizing;
    const isFocused = isSelected || isResizing;
    return (react_1.default.createElement(react_2.Suspense, { fallback: null },
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { draggable: draggable }, isLoadError ? (react_1.default.createElement(BrokenImage, null)) : (react_1.default.createElement(LazyImage, { className: isFocused
                    ? `focused ${(0, lexical_1.$isNodeSelection)(selection) ? 'draggable' : ''}`
                    : null, src: src, altText: altText, imageRef: imageRef, width: width, height: height, maxWidth: maxWidth, onError: () => setIsLoadError(true) }))),
            showCaption && (react_1.default.createElement("div", { className: "image-caption-container" },
                react_1.default.createElement(LexicalNestedComposer_1.LexicalNestedComposer, { initialEditor: caption },
                    react_1.default.createElement(LexicalAutoFocusPlugin_1.AutoFocusPlugin, null),
                    react_1.default.createElement(MentionsPlugin_1.default, null),
                    react_1.default.createElement(LinkPlugin_1.default, null),
                    react_1.default.createElement(EmojisPlugin_1.default, null),
                    react_1.default.createElement(LexicalHashtagPlugin_1.HashtagPlugin, null),
                    react_1.default.createElement(KeywordsPlugin_1.default, null),
                    react_1.default.createElement(LexicalHistoryPlugin_1.HistoryPlugin, { externalHistoryState: historyState }),
                    react_1.default.createElement(LexicalRichTextPlugin_1.RichTextPlugin, { contentEditable: react_1.default.createElement(ContentEditable_1.default, { className: "ImageNode__contentEditable" }), placeholder: react_1.default.createElement(Placeholder_1.default, { className: "ImageNode__placeholder" }, "Enter a caption..."), ErrorBoundary: LexicalErrorBoundary_1.default }),
                    react_1.default.createElement(TreeViewPlugin_1.default, null)))),
            resizable && (0, lexical_1.$isNodeSelection)(selection) && isFocused && (react_1.default.createElement(ImageResizer_1.default, { showCaption: showCaption, setShowCaption: setShowCaption, editor: editor, buttonRef: buttonRef, imageRef: imageRef, maxWidth: maxWidth, onResizeStart: onResizeStart, onResizeEnd: onResizeEnd, captionsEnabled: !isLoadError && captionsEnabled })))));
}

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageNode = void 0;
exports.$createImageNode = $createImageNode;
exports.$isImageNode = $isImageNode;
const lexical_1 = require("lexical");
const React = __importStar(require("react"));
const react_1 = require("react");
const ImageComponent = React.lazy(() => import('./ImageComponent'));
function isGoogleDocCheckboxImg(img) {
    return (img.parentElement != null &&
        img.parentElement.tagName === 'LI' &&
        img.previousSibling === null &&
        img.getAttribute('aria-roledescription') === 'checkbox');
}
function $convertImageElement(domNode) {
    const img = domNode;
    if (img.src.startsWith('file:///') || isGoogleDocCheckboxImg(img)) {
        return null;
    }
    const { alt: altText, src, width, height } = img;
    const node = $createImageNode({ altText, height, src, width });
    return { node };
}
class ImageNode extends lexical_1.DecoratorNode {
    __src;
    __altText;
    __width;
    __height;
    __maxWidth;
    __showCaption;
    __caption;
    // Captions cannot yet be used within editor cells
    __captionsEnabled;
    static getType() {
        return 'image';
    }
    static clone(node) {
        return new ImageNode(node.__src, node.__altText, node.__maxWidth, node.__width, node.__height, node.__showCaption, node.__caption, node.__captionsEnabled, node.__key);
    }
    static importJSON(serializedNode) {
        const { altText, height, width, maxWidth, caption, src, showCaption } = serializedNode;
        const node = $createImageNode({
            altText,
            height,
            maxWidth,
            showCaption,
            src,
            width,
        });
        const nestedEditor = node.__caption;
        const editorState = nestedEditor.parseEditorState(caption.editorState);
        if (!editorState.isEmpty()) {
            nestedEditor.setEditorState(editorState);
        }
        return node;
    }
    exportDOM() {
        const element = document.createElement('img');
        element.setAttribute('src', this.__src);
        element.setAttribute('alt', this.__altText);
        element.setAttribute('width', this.__width.toString());
        element.setAttribute('height', this.__height.toString());
        return { element };
    }
    static importDOM() {
        return {
            img: (node) => ({
                conversion: $convertImageElement,
                priority: 0,
            }),
        };
    }
    constructor(src, altText, maxWidth, width, height, showCaption, caption, captionsEnabled, key) {
        super(key);
        this.__src = src;
        this.__altText = altText;
        this.__maxWidth = maxWidth;
        this.__width = width || 'inherit';
        this.__height = height || 'inherit';
        this.__showCaption = showCaption || false;
        this.__caption = caption || (0, lexical_1.createEditor)();
        this.__captionsEnabled = captionsEnabled || captionsEnabled === undefined;
    }
    exportJSON() {
        return {
            altText: this.getAltText(),
            caption: this.__caption.toJSON(),
            height: this.__height === 'inherit' ? 0 : this.__height,
            maxWidth: this.__maxWidth,
            showCaption: this.__showCaption,
            src: this.getSrc(),
            type: 'image',
            version: 1,
            width: this.__width === 'inherit' ? 0 : this.__width,
        };
    }
    setWidthAndHeight(width, height) {
        const writable = this.getWritable();
        writable.__width = width;
        writable.__height = height;
    }
    setShowCaption(showCaption) {
        const writable = this.getWritable();
        writable.__showCaption = showCaption;
    }
    // View
    createDOM(config) {
        const span = document.createElement('span');
        const theme = config.theme;
        const className = theme.image;
        if (className !== undefined) {
            span.className = className;
        }
        return span;
    }
    updateDOM() {
        return false;
    }
    getSrc() {
        return this.__src;
    }
    getAltText() {
        return this.__altText;
    }
    decorate() {
        return (React.createElement(react_1.Suspense, { fallback: null },
            React.createElement(ImageComponent, { src: this.__src, altText: this.__altText, width: this.__width, height: this.__height, maxWidth: this.__maxWidth, nodeKey: this.getKey(), showCaption: this.__showCaption, caption: this.__caption, captionsEnabled: this.__captionsEnabled, resizable: true })));
    }
}
exports.ImageNode = ImageNode;
function $createImageNode({ altText, height, maxWidth = 500, captionsEnabled, src, width, showCaption, caption, key, }) {
    return (0, lexical_1.$applyNodeReplacement)(new ImageNode(src, altText, maxWidth, width, height, showCaption, caption, captionsEnabled, key));
}
function $isImageNode(node) {
    return node instanceof ImageNode;
}

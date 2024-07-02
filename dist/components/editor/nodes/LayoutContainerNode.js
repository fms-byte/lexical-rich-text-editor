"use strict";
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutContainerNode = void 0;
exports.$createLayoutContainerNode = $createLayoutContainerNode;
exports.$isLayoutContainerNode = $isLayoutContainerNode;
const utils_1 = require("@lexical/utils");
const lexical_1 = require("lexical");
function $convertLayoutContainerElement(domNode) {
    const styleAttributes = window.getComputedStyle(domNode);
    const templateColumns = styleAttributes.getPropertyValue('grid-template-columns');
    if (templateColumns) {
        const node = $createLayoutContainerNode(templateColumns);
        return { node };
    }
    return null;
}
class LayoutContainerNode extends lexical_1.ElementNode {
    __templateColumns;
    constructor(templateColumns, key) {
        super(key);
        this.__templateColumns = templateColumns;
    }
    static getType() {
        return 'layout-container';
    }
    static clone(node) {
        return new LayoutContainerNode(node.__templateColumns, node.__key);
    }
    createDOM(config) {
        const dom = document.createElement('div');
        dom.style.gridTemplateColumns = this.__templateColumns;
        if (typeof config.theme.layoutContainer === 'string') {
            (0, utils_1.addClassNamesToElement)(dom, config.theme.layoutContainer);
        }
        return dom;
    }
    exportDOM() {
        const element = document.createElement('div');
        element.style.gridTemplateColumns = this.__templateColumns;
        element.setAttribute('data-lexical-layout-container', 'true');
        return { element };
    }
    updateDOM(prevNode, dom) {
        if (prevNode.__templateColumns !== this.__templateColumns) {
            dom.style.gridTemplateColumns = this.__templateColumns;
        }
        return false;
    }
    static importDOM() {
        return {
            div: (domNode) => {
                if (!domNode.hasAttribute('data-lexical-layout-container')) {
                    return null;
                }
                return {
                    conversion: $convertLayoutContainerElement,
                    priority: 2,
                };
            },
        };
    }
    static importJSON(json) {
        return $createLayoutContainerNode(json.templateColumns);
    }
    isShadowRoot() {
        return true;
    }
    canBeEmpty() {
        return false;
    }
    exportJSON() {
        return {
            ...super.exportJSON(),
            templateColumns: this.__templateColumns,
            type: 'layout-container',
            version: 1,
        };
    }
    getTemplateColumns() {
        return this.getLatest().__templateColumns;
    }
    setTemplateColumns(templateColumns) {
        this.getWritable().__templateColumns = templateColumns;
    }
}
exports.LayoutContainerNode = LayoutContainerNode;
function $createLayoutContainerNode(templateColumns) {
    return new LayoutContainerNode(templateColumns);
}
function $isLayoutContainerNode(node) {
    return node instanceof LayoutContainerNode;
}

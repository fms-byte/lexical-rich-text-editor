"use strict";
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutItemNode = void 0;
exports.$createLayoutItemNode = $createLayoutItemNode;
exports.$isLayoutItemNode = $isLayoutItemNode;
const utils_1 = require("@lexical/utils");
const lexical_1 = require("lexical");
class LayoutItemNode extends lexical_1.ElementNode {
    static getType() {
        return 'layout-item';
    }
    static clone(node) {
        return new LayoutItemNode(node.__key);
    }
    createDOM(config) {
        const dom = document.createElement('div');
        if (typeof config.theme.layoutItem === 'string') {
            (0, utils_1.addClassNamesToElement)(dom, config.theme.layoutItem);
        }
        return dom;
    }
    updateDOM() {
        return false;
    }
    static importDOM() {
        return {};
    }
    static importJSON() {
        return $createLayoutItemNode();
    }
    isShadowRoot() {
        return true;
    }
    exportJSON() {
        return {
            ...super.exportJSON(),
            type: 'layout-item',
            version: 1,
        };
    }
}
exports.LayoutItemNode = LayoutItemNode;
function $createLayoutItemNode() {
    return new LayoutItemNode();
}
function $isLayoutItemNode(node) {
    return node instanceof LayoutItemNode;
}

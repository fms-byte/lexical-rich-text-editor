"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSelectedNode = getSelectedNode;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
const selection_1 = require("@lexical/selection");
function getSelectedNode(selection) {
    const anchor = selection.anchor;
    const focus = selection.focus;
    const anchorNode = selection.anchor.getNode();
    const focusNode = selection.focus.getNode();
    if (anchorNode === focusNode) {
        return anchorNode;
    }
    const isBackward = selection.isBackward();
    if (isBackward) {
        return (0, selection_1.$isAtNodeEnd)(focus) ? anchorNode : focusNode;
    }
    else {
        return (0, selection_1.$isAtNodeEnd)(anchor) ? anchorNode : focusNode;
    }
}

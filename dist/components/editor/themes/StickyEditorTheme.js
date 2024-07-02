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
require("./StickyEditorTheme.css");
const PlaygroundEditorTheme_1 = __importDefault(require("./PlaygroundEditorTheme"));
const theme = {
    ...PlaygroundEditorTheme_1.default,
    paragraph: 'StickyEditorTheme__paragraph',
};
exports.default = theme;

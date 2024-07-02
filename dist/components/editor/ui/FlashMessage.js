"use strict";
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FlashMessage;
require("./FlashMessage.css");
const react_dom_1 = require("react-dom");
function FlashMessage({ children, }) {
    return (0, react_dom_1.createPortal)(React.createElement("div", { className: "FlashMessage__overlay", role: "dialog" },
        React.createElement("p", { className: "FlashMessage__alert", role: "alert" }, children)), document.body);
}

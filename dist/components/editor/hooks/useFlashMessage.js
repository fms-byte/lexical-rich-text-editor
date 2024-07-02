"use strict";
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = useFlashMessage;
const FlashMessageContext_1 = require("../context/FlashMessageContext");
function useFlashMessage() {
    return (0, FlashMessageContext_1.useFlashMessageContext)();
}

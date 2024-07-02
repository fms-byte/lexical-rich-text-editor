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
exports.useFlashMessageContext = exports.FlashMessageContext = void 0;
const react_1 = require("react");
const react_2 = __importDefault(require("react"));
const FlashMessage_1 = __importDefault(require("../ui/FlashMessage"));
const Context = (0, react_1.createContext)(undefined);
const INITIAL_STATE = {};
const DEFAULT_DURATION = 1000;
const FlashMessageContext = ({ children, }) => {
    const [props, setProps] = (0, react_1.useState)(INITIAL_STATE);
    const showFlashMessage = (0, react_1.useCallback)((message, duration) => setProps(message ? { duration, message } : INITIAL_STATE), []);
    (0, react_1.useEffect)(() => {
        if (props.message) {
            const timeoutId = setTimeout(() => setProps(INITIAL_STATE), props.duration ?? DEFAULT_DURATION);
            return () => clearTimeout(timeoutId);
        }
    }, [props]);
    return (react_2.default.createElement(Context.Provider, { value: showFlashMessage },
        children,
        props.message && react_2.default.createElement(FlashMessage_1.default, null, props.message)));
};
exports.FlashMessageContext = FlashMessageContext;
const useFlashMessageContext = () => {
    const ctx = (0, react_1.useContext)(Context);
    if (!ctx) {
        throw new Error('Missing FlashMessageContext');
    }
    return ctx;
};
exports.useFlashMessageContext = useFlashMessageContext;

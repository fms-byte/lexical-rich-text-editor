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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = useModal;
const react_1 = require("react");
const React = __importStar(require("react"));
const Modal_1 = __importDefault(require("../ui/Modal"));
function useModal() {
    const [modalContent, setModalContent] = (0, react_1.useState)(null);
    const onClose = (0, react_1.useCallback)(() => {
        setModalContent(null);
    }, []);
    const modal = (0, react_1.useMemo)(() => {
        if (modalContent === null) {
            return null;
        }
        const { title, content, closeOnClickOutside } = modalContent;
        return (React.createElement(Modal_1.default, { onClose: onClose, title: title, closeOnClickOutside: closeOnClickOutside }, content));
    }, [modalContent, onClose]);
    const showModal = (0, react_1.useCallback)((title, 
    // eslint-disable-next-line no-shadow
    getContent, closeOnClickOutside = false) => {
        setModalContent({
            closeOnClickOutside,
            content: getContent(onClose),
            title,
        });
    }, [onClose]);
    return [modal, showModal];
}

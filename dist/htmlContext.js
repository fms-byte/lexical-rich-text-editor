"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlProvider = exports.useHtmlContext = void 0;
var React = require("react");
var react_1 = require("react");
var HtmlContext = (0, react_1.createContext)(undefined);
var useHtmlContext = function () {
    var context = (0, react_1.useContext)(HtmlContext);
    if (!context) {
        throw new Error('useHtmlContext must be used within a HtmlProvider');
    }
    return context;
};
exports.useHtmlContext = useHtmlContext;
var HtmlProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(''), htmlString = _b[0], setHtmlString = _b[1];
    return React.createElement(HtmlContext.Provider, { value: { htmlString: htmlString, setHtmlString: setHtmlString } }, children);
};
exports.HtmlProvider = HtmlProvider;

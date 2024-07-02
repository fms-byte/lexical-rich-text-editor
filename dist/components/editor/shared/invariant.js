"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = invariant;
function invariant(cond, message, ...args) {
    if (cond) {
        return;
    }
    throw new Error("Internal Lexical error: invariant() is meant to be replaced at compile " +
        "time. There is no runtime version. Error: " +
        message);
}

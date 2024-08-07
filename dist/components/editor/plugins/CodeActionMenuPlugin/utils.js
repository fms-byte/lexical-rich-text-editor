"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDebounce = useDebounce;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
const lodash_es_1 = require("lodash-es");
const react_1 = require("react");
function useDebounce(fn, ms, maxWait) {
    const funcRef = (0, react_1.useRef)(null);
    funcRef.current = fn;
    return (0, react_1.useMemo)(() => (0, lodash_es_1.debounce)((...args) => {
        if (funcRef.current) {
            funcRef.current(...args);
        }
    }, ms, { maxWait }), [ms, maxWait]);
}

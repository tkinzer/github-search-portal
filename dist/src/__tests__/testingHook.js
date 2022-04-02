"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useCounter() {
    const [count, setCount] = react_1.useState(0);
    const increment = react_1.useCallback(() => setCount(x => x + 1), []);
    return { count, increment };
}
exports.default = useCounter;
//# sourceMappingURL=testingHook.js.map
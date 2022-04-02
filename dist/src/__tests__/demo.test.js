"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
const Footer_1 = require("../client/components/Footer");
const react_hooks_1 = require("@testing-library/react-hooks");
const testingHook_1 = __importDefault(require("./testingHook"));
describe("demo", () => {
    it("should be testable", () => {
        expect(1 + 1).toBe(2);
    });
    it("should be able to test component", () => {
        const { getByText } = react_1.render(jsx_runtime_1.jsx(Footer_1.Footer, {}, void 0));
        expect(getByText("Repo")).toBeInTheDocument();
    });
    // More information, see also: https://react-hooks-testing-library.com/
    it("should be able to test hook", () => {
        const { result } = react_hooks_1.renderHook(() => testingHook_1.default());
        react_hooks_1.act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(1);
    });
});
//# sourceMappingURL=demo.test.js.map
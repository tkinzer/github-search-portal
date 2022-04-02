"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppContext = exports.ContextWrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const defaultVal = {
    name: "",
    setName: () => { },
};
const context = react_1.default.createContext(defaultVal);
const { Provider } = context;
const ContextWrapper = ({ children }) => {
    const [name, setName] = react_1.useState(defaultVal.name);
    return jsx_runtime_1.jsx(Provider, Object.assign({ value: { name, setName } }, { children: children }), void 0);
};
exports.ContextWrapper = ContextWrapper;
const useAppContext = () => react_1.useContext(context);
exports.useAppContext = useAppContext;
//# sourceMappingURL=Context.js.map
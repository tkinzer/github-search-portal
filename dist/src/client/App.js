"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Main_1 = __importDefault(require("./pages/Main"));
const Context_1 = require("./Context");
const App = () => {
    return (jsx_runtime_1.jsx(Context_1.ContextWrapper, { children: jsx_runtime_1.jsx(Main_1.default, {}, void 0) }, void 0));
};
exports.App = App;
exports.default = exports.App;
//# sourceMappingURL=App.js.map
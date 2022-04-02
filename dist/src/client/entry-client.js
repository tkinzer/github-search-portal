"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const react_router_dom_1 = require("react-router-dom");
const App_1 = require("./App");
require("./index.css");
react_dom_1.default.hydrate(jsx_runtime_1.jsx(react_1.default.StrictMode, { children: jsx_runtime_1.jsx(react_router_dom_1.BrowserRouter, { children: jsx_runtime_1.jsx(App_1.App, {}, void 0) }, void 0) }, void 0), document.getElementById("app"));
//# sourceMappingURL=entry-client.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const server_1 = __importDefault(require("react-dom/server"));
const react_router_dom_1 = require("react-router-dom");
const App_1 = require("./App");
require("./index.css");
function render(url, context) {
    return server_1.default.renderToString(jsx_runtime_1.jsx(react_1.default.StrictMode, { children: jsx_runtime_1.jsx(react_router_dom_1.StaticRouter, Object.assign({ location: url, context: context }, { children: jsx_runtime_1.jsx(App_1.App, {}, void 0) }), void 0) }, void 0));
}
exports.render = render;
//# sourceMappingURL=entry-server.js.map
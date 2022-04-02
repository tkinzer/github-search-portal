"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Footer = () => {
    return (jsx_runtime_1.jsxs("footer", Object.assign({ className: "justify-center items-center" }, { children: ["\u00A9 ", new Date().getFullYear(), " - ", jsx_runtime_1.jsx("a", Object.assign({ href: "https://jonlu.ca" }, { children: "JonLuca DeCaro" }), void 0), " -", " ", jsx_runtime_1.jsx("a", Object.assign({ className: "p-1", href: "https://github.com/jonluca/vite-typescript-ssr-react" }, { children: "Repo" }), void 0)] }), void 0));
};
exports.Footer = Footer;
//# sourceMappingURL=Footer.js.map
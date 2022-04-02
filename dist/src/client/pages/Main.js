"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Footer_1 = require("../components/Footer");
const Context_1 = require("../Context");
const Main = () => {
    const { name, setName } = Context_1.useAppContext();
    return (jsx_runtime_1.jsxs("div", Object.assign({ className: "flex bg-white-100 font-sans items-center flex-col justify-between h-screen" }, { children: [jsx_runtime_1.jsxs("div", Object.assign({ className: "flex items-center flex-col pt-10" }, { children: [jsx_runtime_1.jsxs("h1", Object.assign({ className: "font-bold text-gray-900 text-5xl lg:text-7xl text-center " }, { children: ["Hi", name ? `, ${name}!` : ""] }), void 0), jsx_runtime_1.jsx("h2", Object.assign({ className: "w-2/5 p-5 items-center flex align-middle text-center min-w-[320px]", style: { color: "green" } }, { children: "This is a Vite React SSR Tailwind boilerplate!" }), void 0), jsx_runtime_1.jsx("input", { placeholder: "Enter your name", onChange: e => setName(e.currentTarget.value), style: { background: "#8080802e" }, className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full text-2xl border-gray-300 rounded-md p-2" }, void 0)] }), void 0), jsx_runtime_1.jsx(Footer_1.Footer, {}, void 0)] }), void 0));
};
exports.default = Main;
//# sourceMappingURL=Main.js.map
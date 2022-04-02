"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const plugin_react_refresh_1 = __importDefault(require("@vitejs/plugin-react-refresh"));
// https://vitejs.dev/config/
exports.default = vite_1.defineConfig({
    plugins: [plugin_react_refresh_1.default()],
    build: {
        minify: false,
    },
});
//# sourceMappingURL=vite.config.js.map
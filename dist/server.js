"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const vite_1 = require("vite");
const serve_static_1 = __importDefault(require("serve-static"));
const compression_1 = __importDefault(require("compression"));
const api_1 = require("./src/server/routes/api");
const isTest = process.env.NODE_ENV === "test" || !!process.env.VITE_TEST_BUILD;
const createServer = async (root = process.cwd(), isProd = process.env.NODE_ENV === "production") => {
    const resolve = (p) => path_1.default.resolve(__dirname, p);
    const indexProd = isProd ? fs_1.default.readFileSync(resolve("./client/index.html"), "utf-8") : "";
    const app = express_1.default();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    let vite;
    if (!isProd) {
        vite = await vite_1.createServer({
            root,
            logLevel: isTest ? "error" : "info",
            server: {
                middlewareMode: true,
                watch: {
                    // During tests we edit the files too ft and sometimes chokidar
                    // misses change events, so enforce polling for consistency
                    usePolling: true,
                    interval: 100,
                },
            },
        });
        // use vite's connect instance as middleware
        app.use(vite.middlewares);
    }
    else {
        app.use(compression_1.default());
        const requestHandler = serve_static_1.default(resolve("./client"), {
            index: false,
        });
        app.use(requestHandler);
    }
    app.use("/api", api_1.getApi);
    app.use("*", async ({ originalUrl }, res) => {
        try {
            const url = originalUrl;
            let template;
            let render;
            if (!isProd) {
                // always read fresh template in dev
                template = fs_1.default.readFileSync(resolve("index.html"), "utf-8");
                template = await vite.transformIndexHtml(url, template);
                render = (await vite.ssrLoadModule("/src/client/entry-server.tsx")).render;
            }
            else {
                template = indexProd;
                const entryServer = require("./server/entry-server.js");
                render = entryServer.render;
            }
            const context = {};
            const appHtml = render(url, context);
            if (context.url) {
                // Somewhere a `<Redirect>` was rendered
                return res.redirect(301, context.url);
            }
            const html = template.replace(`<!--app-html-->`, appHtml);
            res.status(200).set({ "Content-Type": "text/html" }).end(html);
        }
        catch (e) {
            !isProd && vite.ssrFixStacktrace(e);
            console.error(e.stack);
            res.status(500).end(e.stack);
        }
    });
    return { app, vite };
};
exports.createServer = createServer;
createServer().then(({ app }) => {
    const port = process.env.PORT || 7456;
    app.listen(Number(port), "0.0.0.0", () => {
        console.log(`App is listening on http://localhost:${port}`);
    });
});
//# sourceMappingURL=server.js.map
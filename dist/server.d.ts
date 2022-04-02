import express from "express";
declare const createServer: (root?: string, isProd?: boolean) => Promise<{
    app: express.Express;
    vite: any;
}>;
export { createServer };
//# sourceMappingURL=server.d.ts.map
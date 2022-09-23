const { Router } = require("express");
const fg = require("fast-glob");

const setupRoutes = (app) => {
    const router = Router();
    app.use("/api", router);
    fg.sync("**/src/routes/*/**routes.js").map(async (file) => {
        (await import(`../../${file}`)).default(router);
    });
};

module.exports = { setupRoutes };

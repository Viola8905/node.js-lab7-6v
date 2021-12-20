const Router = require("express").Router;
const devController = require("./controller.js");

const devRouter = new Router();

devRouter.get("/technical-information", devController.getAPI);
devRouter.get("/author-information", devController.getAuthor);

module.exports = devRouter;
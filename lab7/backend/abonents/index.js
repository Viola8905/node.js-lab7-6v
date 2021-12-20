const Router = require("express").Router;
const abonentController = require("./controller_db");

const abonentRouter = new Router();


abonentRouter.get("/abonents", abonentController.getAll);
abonentRouter.get("/query", abonentController.getQuery);
abonentRouter.get("/:id", abonentController.getById);
abonentRouter.delete("/:id", abonentController.delete);
abonentRouter.post("/", abonentController.post);
abonentRouter.patch("/:id", abonentController.patch);



module.exports = abonentRouter;
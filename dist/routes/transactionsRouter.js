import express from "express";
import { transactionsCreate } from "../controllers/transactionsControllers.js";
import { transactionsValidation } from "../middlewares/schemasMiddleware.js";
const transactionsRouter = express.Router();
transactionsRouter.get("/", (req, res) => {
    return res.send("Olá");
});
transactionsRouter.post("/", transactionsValidation, transactionsCreate);
export default transactionsRouter;

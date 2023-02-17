import express from "express";
import transactionsRouter from "./transactionsRouter.js";

const router = express.Router();

router.use(transactionsRouter)

export default router;
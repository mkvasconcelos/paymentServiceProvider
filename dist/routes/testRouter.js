import express from "express";
const testRouter = express.Router();
testRouter.get("/", (req, res) => {
    return res.send("Olá");
});
export default testRouter;

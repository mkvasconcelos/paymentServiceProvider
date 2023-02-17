import express from "express";
import cors from "cors";
// import router from "./routes";
import router from "./routes/index.js";
// import deleteSessions from "./controllers/sessionsController.js";
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(router);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

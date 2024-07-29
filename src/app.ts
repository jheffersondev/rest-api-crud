import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UserRouter from "./routes/user.routes";
import ErrorHandlerMiddleware from "./middlewares/errorHandler.middleware";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(UserRouter);
app.use(ErrorHandlerMiddleware);

app.get("*", (req, res) => {
    res.sendStatus(404);
});

module.exports = app;

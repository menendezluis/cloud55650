import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import handlebars from "express-handlebars";
import dotenv from "dotenv";
import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import adoptionsRouter from "./routes/adoption.router.js";
import sessionsRouter from "./routes/sessions.router.js";
import { __dirname } from "./utils/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8082;
const MONGO_URL = process.env.MONGO_URL;
const connection = mongoose.connect(MONGO_URL);

app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/adoptions", adoptionsRouter);
app.use("/api/sessions", sessionsRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

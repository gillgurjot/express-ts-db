import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import log from "./utils/logger";
import router from "./routes";
import * as http from "http";

//config
dotenv.config();
const app: Express = express();
const server: http.Server = http.createServer(app);

//middlewares
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(cookieParser());

//routes
app.use(router);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  log.info(`Server running on port ${port}`);
});

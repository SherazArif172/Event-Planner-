import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import startServer from "./server.js";
import eventsRouter from "./src/Routes/events.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use("/events", eventsRouter);



startServer(app);


import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import startServer from "./server.js";
import eventsRouter from "./src/Routes/events.js";

const app = express();

app.use(
    cors({
      origin: [
        "http://localhost:3001",                 
        "https://event-planner-4ezh.onrender.com",
        "https://events-planner-tawny.vercel.app/" 
      ],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
  

app.use(express.json());
app.use("/events", eventsRouter);

startServer(app);

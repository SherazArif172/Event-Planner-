import  {createEvent, updateEvent, deleteEvent, getAllEvents}  from "../controllers/eventsController.js";
import express from "express";

const eventsRouter = express.Router();

eventsRouter.get("/", getAllEvents);
eventsRouter.post("/create", createEvent);
eventsRouter.put("/:id", updateEvent);
eventsRouter.delete("/:id", deleteEvent);

export default eventsRouter;
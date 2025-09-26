import Event from "../models/Events.js";
import { eventSchema } from '../schemas/eventSchemas.js';



export const createEvent = async (req, res) => {
  try {
    const validatedData = eventSchema.parse(req.body);

    const existingEvent = await Event.findOne({ title: validatedData.title, category: validatedData.category });
    if (existingEvent) {
      return res.status(400).json({ message: "Event already exists" });
    }

    const event = new Event(validatedData);
    await event.save();
    return res.status(201).json(event);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};


export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const validatedData = eventSchema.parse(req.body);
    const event = await Event.findByIdAndUpdate(id, validatedData, { new: true });
    
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    
    return res.status(200).json(event);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};


export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndDelete(id);
    
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    
    return res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};



export const getAllEvents = async (req, res) => {
  try {
    const { category } = req.query;
    
    // Validate category if provided
    if (category && !['work', 'personal', 'others'].includes(category)) {
      return res.status(400).json({ 
        message: "Invalid category. Must be work, personal, or others" 
      });
    }
    
    let filter = {};
    if (category) {
      filter.category = category;
    }
    
    const events = await Event.find(filter);
    return res.status(200).json(events);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};



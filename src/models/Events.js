import mongoose from 'mongoose';
const categories = ['work', 'personal', 'others'];

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  category: { type: String, enum: categories, required: true },
}, { timestamps: true });



const Event = mongoose.model('Event', EventSchema);

export default Event;
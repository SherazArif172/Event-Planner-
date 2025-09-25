import connectDB from "./src/config/db.js";
import dotenv from "dotenv";
dotenv.config();



const port = process.env.PORT || 5000;


const startServer = async (app) => {
  try {
    await connectDB();
    console.log("DB connected");
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (err) {
    console.error("Failed to connect to the database:", err);

  }
};



export default startServer;
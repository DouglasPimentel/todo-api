import mongoose from "mongoose";
import config from "../config";

mongoose.connect(config.MONGO_URI, { bufferCommands: false });

const dbConnection = mongoose.connection;

export default dbConnection;

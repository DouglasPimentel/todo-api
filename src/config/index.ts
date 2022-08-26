import dotenv from "dotenv";

dotenv.config();

const config = {
  APP_NAME: process.env.APP_NAME,
  PORT: process.env.PORT || 4000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/test",
};

export default config;

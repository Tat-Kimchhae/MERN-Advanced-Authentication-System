// dns-config.mjs
import { setServers } from "node:dns/promises";

// Set DNS servers to Cloudflare and Google
setServers(["1.1.1.1", "8.8.8.8"]);

console.log("Custom DNS servers applied.");

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("mongo_uri: ", process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connection to MongoDB: ", error.message);
    process.exit(1); // 1 is failure, 0 status code is success
  }
};

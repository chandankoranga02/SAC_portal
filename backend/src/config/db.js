import mongoose from 'mongoose';
import { config } from './env.js';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoUri);
    console.log(`[MongoDB Connected]: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[MongoDB Connection Error]: ${error.message}`);
    // In development or when local Mongo isn't up yet, log error without crashing the server immediately
    if (config.nodeEnv === 'production') {
      process.exit(1);
    }
  }
};

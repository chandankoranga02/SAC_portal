import app from './app.js';
import { config } from './config/env.js';
import { connectDB } from './config/db.js';

const startServer = async () => {
  // Connect to MongoDB
  await connectDB();

  app.listen(config.port, () => {
    console.log(`[Server] Running in ${config.nodeEnv} mode on http://localhost:${config.port}`);
  });
};

startServer();

import mongoose from 'mongoose';
import log from '../utils/logger.js';

function dbConnection() {
  try {
    mongoose.connect(process.env.DB_URI, {
      dbName: process.env.DB_NAME,
    });
    log.info('DATABASE CONNECTED');
  } catch (err) {
    log.error('DATABASE ERROR => ', err);
  }
}

export default dbConnection;

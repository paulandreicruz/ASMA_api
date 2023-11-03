import mongoose from 'mongoose';

async function dbConnection() {
  try {
    await mongoose.connect(process.env.DB_URI, {
      dbName: process.env.DB_NAME,
    });
    console.log('DATABASE CONNECTED');
  } catch (err) {
    console.log('DATABASE ERROR => ', err);
  }
}

export default dbConnection;

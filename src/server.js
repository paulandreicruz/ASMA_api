import express from 'express';
import dbConnection from './config/dbConfig.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log('SERVER IS RUNNING', port);
  dbConnection();
});

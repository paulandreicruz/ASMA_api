import express from 'express';
import dbConnection from './config/dbConfig.js';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { corsOptions } from './config/corsConfig.js';

dotenv.config();

const app = express();

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log('SERVER IS RUNNING', process.env.PORT);
  dbConnection();
});

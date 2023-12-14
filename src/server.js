import express from 'express';
import dbConnection from './config/dbConfig.js';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { corsOptions } from './config/corsConfig.js';
import log from './utils/logger.js';
import appRoutes from './app_routes.js';

dotenv.config();

const app = express();

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());

app.listen(process.env.PORT, () => {
  // log.info(`Server is running on port ${process.env.PORT}`);
  log.info(`Worker id: ${process.pid}`);
  dbConnection();
  appRoutes(app);
});

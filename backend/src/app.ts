import express from 'express';
import linksRouter from './routes/links'


const app = express();

// use json
app.use(express.json());
app.use(linksRouter);

//routes

export default app;
import express from 'express';
import carRouter from './Routers/carRouter';
import error from './Services/error';

const app = express();

app.use(express.json());

app.use(carRouter);
app.use(error.handler);

export default app;

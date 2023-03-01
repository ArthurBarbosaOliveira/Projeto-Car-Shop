import express from 'express';
import Routes from './Routers/index';
import error from './Services/error';

const app = express();

app.use(express.json());

app.use(Routes);

app.use(error.handler);

export default app;

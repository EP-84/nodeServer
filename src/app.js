import express from 'express';
import router from './router';
import bodyParser from 'body-parser';
import helmet from 'helmet';

const app = express();
app.use(bodyParser.json());
app.use(helmet());
router(app);

export default app;
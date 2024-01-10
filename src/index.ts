import express, { Express } from 'express';
import cors from 'cors';
import CommonRoutesConfig from './common/routes.config';
import HealthcheckRoutes from './routes/healthcheck.route';

const app: Express = express();
const port = '8080';
const routes: Array<CommonRoutesConfig> = [];

app.use(express.json({ limit: '10MB' }));
app.use(cors());

routes.push(new HealthcheckRoutes(app));

app.listen(port, () => {});

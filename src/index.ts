import * as dotenv from 'dotenv';
import express, { Express } from 'express';
import cors from 'cors';
import CommonRoutesConfig from './common/routes.config';
import HealthcheckRoutes from './routes/healthcheck.route';
import DashboardRoutes from './routes/dashboard.route';
import UserRoutes from './routes/user.route';

dotenv.config();
const app: Express = express();
const port = '8080';
const routes: Array<CommonRoutesConfig> = [];
app.use(express.json({ limit: '10MB' }));
app.use(cors());

routes.push(new DashboardRoutes(app));
routes.push(new HealthcheckRoutes(app));
routes.push(new UserRoutes(app));

app.listen(port, () => {});

import express from 'express';
import CommonRoutesConfig from '../common/routes.config';
import HealthcheckController from '../controllers/healthcheck.controller';

export default class HealthcheckRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'HealthcheckRoutes');
  }

  configureRoutes(): express.Application {
    this.app.route('/api/healthcheck').get(HealthcheckController.healthcheck);

    return this.app;
  }
}

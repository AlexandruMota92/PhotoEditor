import express from 'express';
import CommonRoutesConfig from '../common/routes.config';
import DashboardController from '../controllers/dashboard.controller';

export default class DashboardRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'DashboardRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route('/api/dashboard').get(DashboardController.getDashboardFeed);

        return this.app;
    }
}
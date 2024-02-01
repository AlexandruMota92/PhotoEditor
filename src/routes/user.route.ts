import express from 'express';
import CommonRoutesConfig from '../common/routes.config';
import UserController from '../controllers/user.controller';

export default class UserRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UserRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route('/api/user').post(UserController.createUser);

        return this.app;
    }
}

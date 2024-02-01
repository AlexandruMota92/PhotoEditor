import { getModelForClass } from '@typegoose/typegoose';
import express from 'express';
import User from '../models/user.model';

class UserController {
    async createUser(req: express.Request, res: express.Response) {
        const userEntity = getModelForClass(User);
        const createdUser = userEntity.create({
            username: 'Alex',
            password: 'passw0rd'
        })

        res.status(201).send(createdUser);
    }
}

export default new UserController();

// create user with information from req body
// do not allow duplicate username and throw error as response (409 (:)
import express from 'express';

export default abstract class CommonRoutesConfig {
  app: express.Application;

  name: string;

  constructor(app: express.Application, name: string) {
    this.app = app;
    this.name = name;
    this.configureRoutes();
  }

  abstract configureRoutes(): express.Application;
}

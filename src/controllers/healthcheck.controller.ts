import express from 'express';

class HealthcheckController {
  async healthcheck(req: express.Request, res: express.Response) {
    res.status(200).send('Api server is up and running!');
  }
}

export default new HealthcheckController();

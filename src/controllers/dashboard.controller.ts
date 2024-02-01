import express from 'express';
import PhotoEditorMDBClient from '../clients/photo-editor.client';


class DashboardController {
  async getDashboardFeed(req: express.Request, res: express.Response) {
    await PhotoEditorMDBClient.connect();
    res.status(200).send(req.query);
  }
}

export default new DashboardController();

import { Mongoose } from 'mongoose';
import MongooseClient from './mongoose.client';
// import ENV from '../common/env';

class PhotoEditorMDBClient {
  private static photoEditorMDBClient: Mongoose;

  static async connect(): Promise<Mongoose> {
    if (this.photoEditorMDBClient) {
      return this.photoEditorMDBClient;
    }

    this.photoEditorMDBClient = await MongooseClient.connect(
      process.env.MONGODB_CONNECTION_STRING,
      process.env.MONGODB_DB_NAME,
    );

    return this.photoEditorMDBClient;
  }
}

export default PhotoEditorMDBClient;

import mongoose, { Mongoose } from 'mongoose';

export default class MongooseClient {
  /**

Connects to a MongoDB database using Mongoose.
@param {string} uri - The URI (database connection string) for the MongoDB database.
@param {string} name - The name of the MongoDB database.
@returns {Promise<Mongoose>} - A Promise that resolves to the Mongoose instance representing the database connection.
@throws {MongooseConnectionError} - If the connection to the database fails.
*/
  static async connect(uri: string, name: string): Promise<Mongoose> {
    try {
      const connection: Mongoose = await mongoose.connect(uri, {
        dbName: name,
      });

      console.info('Connected Successfully');

      return connection;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

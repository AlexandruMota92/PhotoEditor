import * as process from 'process';

const ENV = { 
    MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING,
    MONGODB_DB_NAME: process.env.MONGODB_DB_NAME
}

export default ENV;

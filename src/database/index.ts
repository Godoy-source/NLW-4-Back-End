import "reflect-metadata";
import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();
    console.log('a');
    return createConnection(
        Object.assign(defaultOptions, {
            database: process.env.NODE_ENV === "test" 
            ? "./src/database/database.test.sqlite" 
            : defaultOptions.database
        })
    );
}
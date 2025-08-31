import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { User } from '../api/models/User';

export const dataSource = new DataSource({
    type: 'mongodb',
    host: `${process.env.DB_HOST}`,
    port: parseInt(`${process.env.DB_PORT}`),
    database: `${process.env.DB_NAME}`,
    synchronize: true,
    logging: false,
    entities: [User],
});
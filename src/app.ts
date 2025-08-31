import 'dotenv/config'
import express from 'express';
import * as bodyParser from 'body-parser';
import { createExpressServer } from 'routing-controllers';

import { UserController } from './api/controllers/UserController';
import { dataSource } from './db/data-source';

const port = process.env.SERVER_PORT;
const app = createExpressServer({
    controllers: [UserController],
});

app.use(express.json());
app.use(bodyParser.json());

dataSource.initialize().then(async () => {
    console.log('Data Source has been initialized!');
    await app.listen(port);
    console.log(`API URL: http://localhost:${port}`);
}).catch((error) => {
    console.error('Error during Data Source initialization:', error);
});

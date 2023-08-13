import { MongoDB } from './config/development.config';
import express from 'express';
import cors from 'cors';

import mongoose from 'mongoose';
import { V1Router } from './v1/v1';
import { MongoBackedRoleRepository } from './repositories/user/mongoRole.repository';

export class API {
  constructor() {}

  public startServer() {
    const corsOptions = {
      origin: 'http://localhost:3000',
    };

    let port: number | undefined = 8080;
    let db = MongoDB.DB;
    const environment = process.env.NODE_ENV;

    const app = express();

    app.use(express.json());
    app.use(cors(corsOptions));

    if (environment === 'test') {
      db = 'test';
      port = undefined;
    }

    mongoose
      .connect(`mongodb://${MongoDB.HOST}:${MongoDB.PORT}/${db}`)
      .then(async (connection) => {
        console.log('Successfully connect to MongoDB.');
        connection.startSession();
        await prefileRoles();
      })
      .catch((err) => {
        console.error('Connection error', err);
        process.exit();
      });

    const v1Router = new V1Router();
    app.use(v1Router.getV1Routers());

    app.listen(port, () => {
      console.log(`listening on http://localhost:${port}`);
    });

    return app;
  }
}

async function prefileRoles() {
  const mongoBackedRoleRepository = new MongoBackedRoleRepository();

  try {
    const foundUserRole = await mongoBackedRoleRepository.findByName('user');
    const foundAdminRole = await mongoBackedRoleRepository.findByName('admin');

    if (!foundUserRole) {
      await mongoBackedRoleRepository.saveRole({ name: 'user' });
    }

    if (!foundAdminRole) {
      await mongoBackedRoleRepository.saveRole({ name: 'admin' });
    }
  } catch (e) {
    console.log('error while prefiling roles', e);
  }
}

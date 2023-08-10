import express from 'express';
import mongoose from 'mongoose';
import { V1Router } from './v1/v1';

export class API {
  constructor() {}

  public startServer(port = 3001) {
    const app = express();
    app.use(express.json());

    mongoose.connect('mongodb://127.0.0.1').then((connection) => {
      connection.startSession();
    });

    const v1Router = new V1Router();
    app.use(v1Router.getV1Routers());

    app.listen(port, () => {
      console.log(`listening on http://localhost:${port}`);
    });

    return app;
  }
}

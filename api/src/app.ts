import express from 'express';
import mongoose from 'mongoose';
import { SensorRouter } from './routers/sensors/sensor.router';

export class API {
  constructor() {}

  public startServer(port = 3001) {
    const app = express();
    app.use(express.json());

    mongoose.connect('mongodb://127.0.0.1').then((connection) => {
      connection.startSession();
    });

    const sensorRouter = new SensorRouter();
    app.use(sensorRouter.getRouter());

    app.listen(port, () => {
      console.log(`listening on http://localhost:${port}`);
    });

    return app;
  }
}

import express from 'express';

//TODO: create separate configs for test and dev and use this instead of what is in app.ts
function createServer() {
  const app = express();
  app.use(express.json());

  const homeRouter = new HomeRouter();
  app.use(homeRouter.getRouter());

  app.listen(3000, () => {
    console.log('listening on http://localhost:3000');
  });

  return app;
}

export default createServer;

import mongoose from 'mongoose';

export function setupDB(databaseName = 'test') {
  beforeAll(async () => {
    const url = `mongodb://127.0.0.1/${databaseName}`;
    await mongoose.connect(url);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
}

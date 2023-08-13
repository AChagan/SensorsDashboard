import request from 'supertest';
import { UserModel } from '../../../schemas/user/user.schema';
import { API } from '../../../app';

const app = new API().startServer();
describe('Auth Controller Test', () => {
  describe('register', () => {
    afterAll(async () => {
      await UserModel.deleteMany({});
    });
    it('should register a user', async () => {
      //When
      const response = await request(app).post(`/auth/register`).send({
        name: 'the-user-name',
        email: 'the-user-email',
        password: 'the-user-password',
        role: 'user',
      });

      //Then
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('User was registered successfully!');
    });

    it('should not register a user with an existing email', async () => {
      //Given
      await request(app).post(`/auth/register`).send({
        name: 'the-user-name',
        email: 'the-user-email',
        password: 'the-user-password',
        role: 'user',
      });

      //When
      const response = await request(app).post(`/auth/register`).send({
        name: 'the-user-name',
        email: 'the-user-email',
        password: 'the-user-password',
        role: 'user',
      });

      //Then
      expect(response.status).toBe(400);
      expect(response.body.message).toBe('Email already registered');
    });
  });

  describe('login', () => {
    afterAll(async () => {
      await UserModel.deleteMany({});
    });

    it('should login a user', async () => {
      //Given
      await request(app).post(`/auth/register`).send({
        name: 'the-user-name',
        email: 'the-user-email',
        password: 'the-user-password',
        role: 'user',
      });

      //When
      const response = await request(app).post(`/auth/login`).send({
        email: 'the-user-email',
        password: 'the-user-password',
      });

      //Then
      expect(response.status).toBe(200);
      expect(response.body.accessToken).toBeDefined();
      expect(response.body.name).toStrictEqual('the-user-name');
      expect(response.body.email).toStrictEqual('the-user-email');
      expect(response.body.role).toStrictEqual('user');
    });

    it('should not login a user with an invalid password', async () => {
      //Given
      await request(app).post(`/auth/register`).send({
        name: 'the-user-name',
        email: 'the-user-email',
        password: 'the-user-password',
        role: 'user',
      });

      //When
      const response = await request(app).post(`/auth/login`).send({
        email: 'the-user-email',
        password: 'any-password',
      });

      //Then
      expect(response.status).toBe(401);
      expect(response.body.message).toStrictEqual('Invalid Password!');
    });

    it('should not login a user with an invalid email', async () => {
      //Given
      await request(app).post(`/auth/register`).send({
        name: 'the-user-name',
        email: 'the-user-email',
        password: 'the-user-password',
        role: 'user',
      });

      //When
      const response = await request(app).post(`/auth/login`).send({
        email: 'any-user-email',
        password: 'any-password',
      });

      //Then
      expect(response.status).toBe(404);
      expect(response.body.message).toStrictEqual('User Not found.');
    });
  });
});

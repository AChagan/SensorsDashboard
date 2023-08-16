import { loginUserValidator, registerUserValidator } from './authValidation';

describe('authValidation', () => {
  describe('registerUserValidator', () => {
    it('should validate register', async () => {
      //When
      const parsedData = registerUserValidator.parse({
        body: {
          email: 'the-valid-email@email.com',
          password: 'the-user-password',
          name: 'the-user-name',
          role: 'user',
        },
      });

      //Then
      expect(parsedData).toBeDefined();
      expect(parsedData.body.email).toBe('the-valid-email@email.com');
      expect(parsedData.body.password).toBe('the-user-password');
      expect(parsedData.body.name).toBe('the-user-name');
      expect(parsedData.body.role).toBe('user');
    });

    it('should not validate register with invalid email', async () => {
      expect(() =>
        registerUserValidator.parse({
          body: {
            email: 'any-email',
            password: 'the-user-password',
            name: 'the-user-name',
            role: 'user',
          },
        }),
      ).toThrowError('Invalid email');
    });

    it('should not validate register with invalid password', async () => {
      expect(() =>
        registerUserValidator.parse({
          body: {
            email: 'the-user-email@email.com',
            password: '123',
            name: 'the-user-name',
            role: 'user',
          },
        }),
      ).toThrowError('Password must be at least 6 characters long.');
    });
  });

  describe('loginUserValidator', () => {
    it('should validate login', async () => {
      //When
      const parsedData = loginUserValidator.parse({
        body: {
          email: 'the-valid-email@email.com',
          password: 'the-user-password',
        },
      });

      //Then
      expect(parsedData).toBeDefined();
      expect(parsedData.body.email).toBe('the-valid-email@email.com');
      expect(parsedData.body.password).toBe('the-user-password');
    });

    it('should not validate login', async () => {
      //When/Then
      expect(() =>
        loginUserValidator.parse({
          body: { email: 'the-user-email' },
        }),
      ).toThrowError('Invalid email');
    });
  });
});

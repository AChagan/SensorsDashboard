import { NextFunction, Request, Response } from 'express';
import { MongoBackedUserRepository } from '../../repositories/user/mongoUser.repository';
import { MongoBackedRoleRepository } from '../../repositories/user/mongoRole.repository';
import { AuthService } from '../../services/auth/auth.service';

const mongoBackedRoleRepository = new MongoBackedRoleRepository();

const authService = new AuthService(new MongoBackedUserRepository());

export const checkIfRegistrationIsValid = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email } = req.body;
  const { role } = req.body;

  const foundUser = await authService.findByEmail(email);

  if (foundUser) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  const foundRole = await mongoBackedRoleRepository.findByName(role);

  if (!foundRole) {
    return res.status(400).json({ message: 'Role does not exist' });
  }

  next();
};

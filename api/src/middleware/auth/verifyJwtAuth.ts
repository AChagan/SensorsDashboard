import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { Auth } from '../../config/development.config';
import { MongoBackedRoleRepository } from '../../repositories/user/mongoRole.repository';
import { MongoBackedUserRepository } from '../../repositories/user/mongoUser.repository';
import { AuthService } from '../../services/auth/auth.service';

const mongoBackedRoleRepository = new MongoBackedRoleRepository();
const authService = new AuthService(new MongoBackedUserRepository());

export const verifyJwtAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({ message: 'No token was provided!' });
  }

  jwt.verify(token.toString(), Auth.key, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized!',
      });
    }
    req.params.userId = decoded.id;
    next();
  });
};

export const verifyIfAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = await authService.findByUserId(req.params.userId);

  if (!user) {
    return res.status(404).send({ message: 'User Not found.' });
  }

  const role = await mongoBackedRoleRepository.findByName(user.roleName);

  if (!role) {
    return res.status(404).send({ message: 'Role Not found.' });
  }

  if (role.roleName !== 'admin') {
    return res.status(403).send({ message: 'Require Admin Role!' });
  }

  next();
};

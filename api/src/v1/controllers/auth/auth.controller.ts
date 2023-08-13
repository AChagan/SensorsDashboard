import { Auth } from '../../../config/development.config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

import { Request, Response, NextFunction } from 'express';
import { userParams } from '../../../models/user';
import { MongoBackedUserRepository } from '../../../repositories/user/mongoUser.repository';
import { AuthService } from '../../../services/auth/auth.service';

export class AuthController {
  constructor() {}
  authService = new AuthService(new MongoBackedUserRepository());
  registerUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId = uuidv4();

    const user: userParams = {
      userId: userId,
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      role: req.body.role,
      createdTs: new Date().toISOString(),
    };

    await this.authService.registerUser(user);

    res.send({ message: 'User was registered successfully!' });
  };

  loginUser = async (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email;
    const user = await this.authService.findByEmail(email);

    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }

    const isPasswordValid = bcrypt.compareSync(
      req.body.password,
      user.passwordHash,
    );

    if (!isPasswordValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!',
      });
    }

    const token = jwt.sign({ id: user.id }, Auth.key, {
      algorithm: 'HS256',
      expiresIn: 86400,
    });

    res.status(200).send({
      userId: user.id,
      name: user.userName,
      email: user.userEmail,
      role: user.roleName,
      accessToken: token,
    });
  };
}

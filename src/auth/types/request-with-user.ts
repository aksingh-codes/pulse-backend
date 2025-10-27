import { Request } from 'express';
import { AuthUser } from './auth0-jwt.types';

export interface RequestWithUser extends Request {
  user: AuthUser;
}

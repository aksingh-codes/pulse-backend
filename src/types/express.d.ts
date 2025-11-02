/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Auth0User } from '../auth/types/auth0-user.type';

declare global {
  namespace Express {
    interface User extends Auth0User {}
  }
}

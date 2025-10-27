export interface Auth0JwtPayload {
  sub: string;
  email?: string;
  name?: string;
  [key: string]: any;
}

export interface AuthUser {
  id: string;
  email?: string;
  name?: string;
}

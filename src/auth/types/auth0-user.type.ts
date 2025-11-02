export interface Auth0User {
  sub: string; // Auth0 user ID (unique)
  email: string;
  name?: string;
  picture?: string;
  [key: string]: any; // sometimes Auth0 adds extra claims
}

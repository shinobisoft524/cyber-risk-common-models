import { IRole } from './structure';

export interface IAuthUser {
  name: string;
  password: string;
}

export interface IBaseUser {
  id?: number;
  email: string;
  emailVerified?: Date;
  password: string;
  name: string;
}

export interface IFullUser extends IBaseUser {
  role?: IRole;
}

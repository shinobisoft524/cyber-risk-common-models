export interface IAuthUser {
  name: string;
  password: string;
}

export interface IBaseUser {
  id: string;
  email: string;
  emailVerified?: Date;
  password: string;
  name: string;
  roleId: string;
}

export interface IRole {
  id: string;
  name: string;
  description: string;
  isActived: boolean;
}

export interface IFullUser extends IBaseUser {
  role?: IRole;
}

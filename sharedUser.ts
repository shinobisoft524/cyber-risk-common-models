import { RoleTitles } from '@/cmodels';
import { IRoleTitle } from './structure';

export interface IAdminUser {
  name: string;
  id: number;
  email: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  UserRole: {
    id: number;
    isActive: boolean;
    Role: { name: string; id: number };
  }[];
}

export interface IWorker {
  name: string;
  id: number;
  email: string;
  logo: string;
  isActive: boolean;
  is2FA?: boolean;
  createdAt: Date;
  updatedAt: Date;
  tfaSecret?: string;
  OrganisationStructure: {
    id: number;
    isActive: boolean;
    organisationId: number;
    Team: { name: string; id: number; logo: string; isActive: boolean };
    OrganisationRole: {
      id: number;
      isActive: boolean;
      Role: { name: string; id: number };
    }[];
  }[];
}

export interface IUserListIteam {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  creatorId?: number;
  Creator?: {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  };
  lastLoginAt: Date;
  endDate: Date;
  isActive: boolean;
  isUnlock: boolean;
  is2FA?: boolean;
  OrganisationStructure: {
    id: number;
    organisationId: number;
    isActive: boolean;
    Team?: {
      id: number;
      name: string;
      isActive: boolean;
    };
    teamId: number;
  }[];
}

export interface IUserDetail extends IUserListIteam {
  roleTitles: IRoleTitle[];
  password?: string;
  workerTitle?: RoleTitles;
}

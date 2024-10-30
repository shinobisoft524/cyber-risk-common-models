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
  createdAt: Date;
  updatedAt: Date;
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
  lastLoginAt: Date;
  OrganisationStructure: {
    id: number;
    organisationId: number;
    isActive: boolean;
    Team: {
      id: number;
      name: string;
      isActive: boolean;
    };
    teamId: number;
  }[];
}

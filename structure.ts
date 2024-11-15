export interface ITeam {
  name: string;
  id: number;
  logo: string;
  isActive: boolean;
}

export interface IRole {
  name: string;
  id: number;
  description?: string;
}

export interface IOrganisationRole {
  id: number;
  isActive: boolean;
  Role?: IRole;
}

export interface IRoleTitle {
  title: string;
  id: number;
  isActive: boolean;
  organisationId: number;
  Team: ITeam;
  OrganisationRole: IOrganisationRole[];
}

import { RoleTitles } from './commonStatic';

export interface ITeamBase {
  id?: number;
  name: string;
  description?: string;
  logo?: string;
}

export interface ITeamBaseDetail extends ITeamBase {
  organisationId: number;

  isActive: boolean;
  isUnlock: boolean;

  createdAt: Date;
  updatedAt: Date;
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
  title: RoleTitles;
  id: number;
  isActive: boolean;
  organisationId: number;
  Team: ITeamBase;
  OrganisationRole: IOrganisationRole[];
}

export interface IAssessmentTeamBase {
  id?: number;
  assessmentId: number;
  organisationId: number;
  teamId: number;
  teamType: 'Worker' | 'Viewer';

  isActive: boolean;
  isUnlock: boolean;

  createdAt: Date;
  updatedAt: Date;
}

// export interface IAssessmentTeamDetail extends IAssessmentTeamBase {
//   Team?:
// }

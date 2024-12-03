import { IOrganisationTemplateRes } from './apiResponseTypes';
import { RoleTitles } from './commonStatic';
import { ITeamBase, ITeamBaseDetail } from './structure';

export interface IAssessment {
  entity: string;
  scope?: string;
  assessor: string;
  completion: number;
}

export interface IFiterType {
  id: number;
  filterbyTitle?: string;
  name?: string;
  sort?: string;
  icon?: any;
  devider?: boolean;
}

export interface IQuestionMongo {
  cyberkey: string;
  cyberId: string;
  templateInfo: {
    templateId: number;
    stageId: string; // stage1
  };
  stageId: string;
  nId: number;
  question: string;
  answers: {
    id: number;
    label: string | null;
    value?: string;
    keyId: number;
    answerType: 'Confirmed' | 'Delayed';
  }[];
  date1: string;
  date2: string;
  _ref?: {
    key: string;
    value: string;
  }[];
  _info?: any;
}

export enum AssessmentConfig {
  ViewMode = 'ViewMode',
  SaveMode = 'SaveMode',
  AssignMode = 'AssignMode',
}

export enum ViewMode {
  Full = 'Full',
  Single = 'Single',
  Page = 'Page',
  Five = 'Five',
  Ten = 'Ten',
  Twenty = 'Twenty',
  Fifty = 'Fifty',
  Hundred = 'Hundred',
}

export interface IAssessmentBase {
  id?: number;
  name: string;
  description?: string;
  logo?: string;

  isActive: boolean;
  isUnlock: boolean;

  createdAt: Date;
  updatedAt: Date;
  organisationTemplateId?: number;
  organisationId: number;
}

export interface IAssessmentSetting {
  id?: number;
  assessmentId: number;
  name: string;
  value: string;
}

export interface IAssessmentDetail extends IAssessmentBase {
  password?: string;
  secretToken?: string;
  roleTitle?: RoleTitles;
  AssessmentSetting?: IAssessmentSetting[];
}

export interface IAssessmentDetailWithTeamInfo extends IAssessmentDetail {
  AssessmentTeam: {
    id: number;
    assessmentId: number;
    Team: ITeamBase;
  }[];
}

export interface IAssessmentFullData {
  workTitle: RoleTitles;
  assessment: IAssessmentDetailWithTeamInfo;
  teamInfo: {
    remainTeams: ITeamBaseDetail[];
    workerTeams: ITeamBaseDetail[];
    viewerTeams: ITeamBaseDetail[];
    assessmentTeams: ITeamBaseDetail[];

    remianTeamIds: number[];
    workerTeamIds: number[];
    viewerTeamIds: number[];
    assessmentTeamIds: number[];
  };
  templatesInfo?: IOrganisationTemplateRes[];
}

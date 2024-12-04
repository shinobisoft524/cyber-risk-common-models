import { IQuestionMongo } from './assessment';
import { AnswerMode, AnswerType, RoleTitles } from './commonStatic';
import { IScoreValueDetail } from './result';

export interface IStandardRes<T> {
  data: T;
  message?: string;
  statusCode: number;
}

export interface IAuthReq {
  email: string;
  password: string;
  code?: string;
}
export interface IOrganisationDetailRes {
  id: number;
  name: string;
  logo?: string;
  Owner?: { id: number; name: string; email: string };
}

export interface ITemplateListRes {
  id: number;
  name: string;
  TemplateStage: { id: number; name: string }[];
}

export interface IOrganisationAssessmentDetailRes {
  id: number;
  name: string;
  templateId: number;
  Template: { name: string };
}

export interface IOrganisationTemplateRes {
  id: number;
  name: string;
  organisationId: number;
  templateId: number;
  Template: { id: number; name: string };
}

export interface IOrganisationAssessmentRes {
  id: number;
  name: string;
  description: string;
  logo: string;
  isActive: boolean;
  isOwner?: boolean;
  isManager?: boolean;
  isWorker?: boolean;
  isViewer?: boolean;
  organisationTemplateId: number;
}

export interface ITeamUser {
  id: number;
  isActive: boolean;
  name: string;
  email: string;
  logo: string;
}
export interface ITeamInfo {
  managers: ITeamUser[];
  teamUsers: ITeamUser[];
  organisationUsers: ITeamUser[];
}

export interface ITeamDetailRes {
  team: {
    id: number;
    name: string;
    description: string;
    organisationId: number;
    isActive: boolean;
    Organisation: {
      id: number;
      name: string;
    };
  };
  info: ITeamInfo;
}

export interface IQuestionAnswerDetailBase {
  id: number;
  confirmedAnswerId?: number;
  answerType?: AnswerType;
  answerMode: AnswerMode;
  OrganisationStructure: {
    id: number;
    Team: {
      id: number;
      name: string;
    };
    User: {
      id: number;
      name: string;
      email: string;
    };
  };
}

export interface IWorkQuestionBase {
  question: IQuestionMongo & {
    confirmedAnswerId?: number;
    answerType?: AnswerType;
  };
  assign: {
    id: number;
    questionMongoId: string;
    confirmedAnswerId?: number;
    answerType?: AnswerType;
    QuestionAnswer: IQuestionAnswerDetailBase[];
  };
}

export interface IWorkQuestion extends IWorkQuestionBase {
  works?: IQuestionAnswerDetailBase[];
  views?: IQuestionAnswerDetailBase[];
}

export interface IQuestionUserDetailWithRole {
  id: number;
  isActive: boolean;
  OrganisationRole: { id: number; Role: { name: string } }[];
  User: { id: number; isActive: boolean; name: string; email: string };
  roleTitle: RoleTitles;
  Team: {
    id: number;
    name: string;
  };
}

export interface IWorkAssessmentRes {
  roleTitle?: RoleTitles;
  teamMembers?: {
    Team: {
      id: number;
      name: string;
      OrganisationStructure: {
        id: number;
        isActive: boolean;
        User: { id: number; isActive: boolean; name: string; email: string };
      }[];
    };
  }[];
  workQuestions: IWorkQuestion[];
  workers?: IQuestionUserDetailWithRole[];
  viewers?: IQuestionUserDetailWithRole[];
  category?: IScoreValueDetail;
}

export interface ITeamDetail {
  name: string;
  id: number;
  description: string;
  organisationId: number;
  isActive: boolean;
  Organisation: { name: string; id: number };
  AssessmentTeam: {
    id: number;
    Assessment: {
      name: string;
      id: number;
      isActive: boolean;
      isUnlock: boolean;
    };
    isSelected?: boolean;
    action?: 'Non' | 'Everything' | 'Nothing';
  }[];
  role?: RoleTitles;
}

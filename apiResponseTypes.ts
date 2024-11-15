import { IQuestionMongo } from './assessment';

export interface IStandardRes<T> {
  data: T;
  message?: string;
  statusCode: number;
}

export interface IAuthReq {
  email: string;
  password: string;
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

export interface IWorkQuestion {
  question: IQuestionMongo & {
    confirmedAnswerId?: number;
    answerType?: 'Confirmed' | 'Delayed' | 'Unknown';
  };
  assign: {
    id: number;
    questionMongoId: string;
    confirmedAnswerId?: number;
    answerType?: 'Confirmed' | 'Delayed' | 'Unknown';
    QuestionAnswer: {
      id: number;
      confirmedAnswerId?: number;
      answerType?: 'Confirmed' | 'Delayed' | 'Unknown';
      answerMode: 'Owner' | 'Manager' | 'Worker' | 'Viewer';
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
    }[];
  };
  teams?: {
    Team: {
      id: number;
      name: string;
      OrganisationStructure: {
        id: number;
        User: {
          id: number;
          name: string;
          email: string;
        };
      }[];
    };
  }[];
  views?: {
    Team: {
      id: number;
      name: string;
      OrganisationStructure: {
        id: number;
        User: {
          id: number;
          name: string;
          email: string;
        };
      }[];
    };
  }[];
}

export interface IWorkAssessmentRes {
  role?: 'isOwner' | 'isManager' | 'isWorker' | 'isViewer' | undefined;
  teamMembers: {
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
}

export interface IteamDetail {
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
  }[];
}

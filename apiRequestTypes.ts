export interface IStandardReq<T> {
  reqUser?: any;
  reqOrg?: any;
  reqType?: 'list' | 'detail' | 'create' | 'update' | 'delete' | 'read';
  info?: T;
}

export interface IOrganisationDetailReq {
  id: number;
}

export interface IOrganisationCreateReq {
  id?: number;
  name: string;
  Owner: {
    id?: number;
    name: string;
    email: string;
  };
}

export interface ITemplateCreateReq {
  id?: number;
  name: string;
}

export interface ITemplateDetailReq {
  id: number;
}

export interface ITemplateListReq {
  id?: number;
}

export interface IOrganisationAssessmentDetailReq {
  id?: number;
}

export interface IAssessmentDetailReq {
  id?: number;
}

export interface IAssessmentCreateReq {
  id?: number;
  name: string;
  description?: string;
}


export interface IAssignWorker {
  organisationStructureId: number;
  User: { id: number; name: string; email: string };
  Team: { id: number; name: string };
  isSelected?: boolean;
}

export interface IAssignWorkerTeam {
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
}

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
  organisationTemplateId: number;
}

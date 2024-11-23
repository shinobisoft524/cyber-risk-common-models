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

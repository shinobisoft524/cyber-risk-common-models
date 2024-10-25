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

  nId: number;
  question: string;
  answers: {
    id: number;
    label: string;
    value?: string;
  }[];
  date1: string;
  date2: string;
  _ref?: {
    [key: string]: any;
  };
}

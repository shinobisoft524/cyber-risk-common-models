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

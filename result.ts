import { IWorkQuestionBase } from './apiResponseTypes';
import { IAssessmentDetailWithTeamInfo } from './assessment';
import { AnswerMode, AnswerType } from './commonStatic';

export interface IRiskScoreSummary {
  Ir_Score: number;
  resultirLevel: string;
  totalPercentage: number;
  percentageOptimal: number;
  overallTotalPercentage: number;
  irLevel: string;
  suggestedMinimumMaturityLevel: string;
  suggestedMaximumMaturityLevel: string;
}

export interface IResultDetail {
  assessment: IAssessmentDetailWithTeamInfo;
  riskScoreSummary: IRiskScoreSummary;
}

export interface ITierLevelResult {
  key: string;
  name: string;
  count: number;
  _v?: IWorkQuestionBase;
  scores: {
    level?: string;
    name: number;
    count: number;
  }[];
}

export interface ISortResult {
  name: string;
  values: {
    name: string;
    count: number;
    scores: {
      name: number;
      count: number;
    }[];
  }[];
}

export interface IFunctionCatResult {
  name: string;
  count: number;
  values: {
    name: string;
    count: number;
    scores: {
      name: number;
      count: number;
    }[];
  }[];
}

export interface IScoreValueDetail {
  tierLevelResults: ITierLevelResult[];
  sortResults: ISortResult[];
  profiling: {
    targetTierLevel: number;
  };
  functionCatResults: IFunctionCatResult[];
}

export interface IReCalculateData {
  id: number;
  questionMongoId: string;
  confirmedAnswerId: number;
  answerType: AnswerType;
  QuestionAnswer: {
    id: number;
    updatedAt: Date;
    confirmedAnswerId: number;
    answerType: AnswerType;
    OrganisationStructure: any;
    answer: string;
    answerMode: AnswerMode;
  }[];
}

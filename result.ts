import { IAssessmentDetailWithTeamInfo } from './assessment';

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

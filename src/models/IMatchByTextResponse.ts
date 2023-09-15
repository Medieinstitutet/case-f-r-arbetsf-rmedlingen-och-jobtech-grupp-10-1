import { IRelatedOccupations } from "./IRelatedOccupations"

export interface IMatchByTextResponse {
  hits_returned: number,
  identified_keywords_for_input: {
    competencies: string[],
    occupations: string[]
  },
  related_occupations: IRelatedOccupations[]
}
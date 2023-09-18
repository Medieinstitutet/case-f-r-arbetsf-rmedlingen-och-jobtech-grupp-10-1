import { IMatchByTextResponse } from '../models/IMatchByTextResponse';

export interface IAction {
  type: string;
  payload: IMatchByTextResponse;
}

export const RelatedOccupationsReducer = (
  occupations: IMatchByTextResponse,
  action: IAction
) => {
  if (action.type === 'SET_RELATED_OCCUPATIONS') {
    return action.payload;
  }
  return occupations;
};

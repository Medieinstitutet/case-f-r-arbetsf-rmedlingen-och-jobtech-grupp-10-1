import { ILatestSearch } from '../models/ILatestSearch';
import { IMatchByTextResponse } from '../models/IMatchByTextResponse';

export type IAction = {
  type: 'SET_RELATED_OCCUPATIONS';
  payload: IMatchByTextResponse;
} | {type: 'SET_LATEST_SEARCH'; payload: ILatestSearch}

export interface IRelatedOccupationsState {
  occupations: IMatchByTextResponse,
  latestSearch: ILatestSearch
}

export const RelatedOccupationsReducer = (
  state: IRelatedOccupationsState,
  action: IAction
) => {
  if (action.type === 'SET_RELATED_OCCUPATIONS') {
    return {...state, occupations: action.payload}
  }
  else if (action.type === 'SET_LATEST_SEARCH'){
    return {...state, latestSearch: action.payload}
  }
  return state;
};

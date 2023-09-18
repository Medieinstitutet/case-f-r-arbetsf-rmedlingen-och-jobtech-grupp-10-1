import { createContext } from 'react';
import { IMatchByTextResponse } from '../models/IMatchByTextResponse';
import { IAction } from '../reducers/RelatedOccupationsReducer';

interface IRelatedOccupationsContext {
  state: IMatchByTextResponse;
  dispatch: React.Dispatch<IAction>;
}

export const RelatedOccupationsContext =
  createContext<IRelatedOccupationsContext>({} as IRelatedOccupationsContext);

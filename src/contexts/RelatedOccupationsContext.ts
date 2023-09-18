import { createContext } from 'react';
import { IMatchByTextResponse } from '../models/IMatchByTextResponse';
// import { IAction } from '../reducers/RelatedOccupationsReducer';

interface IRelatedOccupationsContext {
  occupationsResponse: IMatchByTextResponse;
  setOccupationsResponse: React.Dispatch<React.SetStateAction<IMatchByTextResponse>>
}

export const RelatedOccupationsContext =
  createContext<IRelatedOccupationsContext>({} as IRelatedOccupationsContext);

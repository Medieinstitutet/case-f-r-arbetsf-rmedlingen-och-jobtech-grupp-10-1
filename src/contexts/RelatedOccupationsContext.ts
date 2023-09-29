import { createContext } from 'react';
import { IAction, IRelatedOccupationsState } from '../reducers/RelatedOccupationsReducer';

export interface IRelatedOccupationsContext {
  state: IRelatedOccupationsState;
  dispatch: React.Dispatch<IAction>;
}

export const RelatedOccupationsContext =
  createContext<IRelatedOccupationsContext>({} as IRelatedOccupationsContext);

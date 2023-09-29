import { Dispatch, createContext } from 'react';
import { IAction } from '../reducers/RelatedOccupationsReducer';

export const RelatedOccupationsDispatchContext = createContext<
  Dispatch<IAction>
>(() => {
  return;
});

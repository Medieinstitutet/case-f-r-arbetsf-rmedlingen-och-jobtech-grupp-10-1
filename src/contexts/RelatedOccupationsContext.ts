import { createContext } from 'react';
import { IMatchByTextResponse } from '../models/IMatchByTextResponse';

export const RelatedOccupationsContext = createContext<IMatchByTextResponse>(
  {} as IMatchByTextResponse
);

import { useState } from 'react';
import { RelatedOccupationsContext } from '../contexts/RelatedOccupationsContext';
import { IMatchByTextResponse } from '../models/IMatchByTextResponse';

interface IOccupationsContextProvider {
  children: JSX.Element | JSX.Element[];
}

export const OccupationsContextProvider = ({ children }: IOccupationsContextProvider) => {
  const [occupationsResponse, setOccupationsResponse] =
    useState<IMatchByTextResponse>({} as IMatchByTextResponse);

  return (
    <RelatedOccupationsContext.Provider
      value={{ occupationsResponse, setOccupationsResponse }}
    >
      {children}
    </RelatedOccupationsContext.Provider>
  );
};

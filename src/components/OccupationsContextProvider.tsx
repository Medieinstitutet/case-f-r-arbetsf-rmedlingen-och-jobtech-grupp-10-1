import { useReducer } from 'react';
import { RelatedOccupationsContext } from '../contexts/RelatedOccupationsContext';
import { IMatchByTextResponse } from '../models/IMatchByTextResponse';
import { RelatedOccupationsReducer } from '../reducers/RelatedOccupationsReducer';

interface IOccupationsContextProvider {
  children: JSX.Element | JSX.Element[];
}

export const OccupationsContextProvider = ({
  children,
}: IOccupationsContextProvider) => {
  const [occupations, dispatch] = useReducer(
    RelatedOccupationsReducer,
    {} as IMatchByTextResponse
  );

  return (
    <RelatedOccupationsContext.Provider value={{ occupations, dispatch }}>
      {children}
    </RelatedOccupationsContext.Provider>
  );
};

import { useReducer } from 'react';
import { RelatedOccupationsContext } from '../contexts/RelatedOccupationsContext';
import {
  IRelatedOccupationsState,
  RelatedOccupationsReducer,
} from '../reducers/RelatedOccupationsReducer';

interface IOccupationsContextProvider {
  children: JSX.Element | JSX.Element[];
}

export const OccupationsContextProvider = ({
  children,
}: IOccupationsContextProvider) => {
  const [state, dispatch] = useReducer(
    RelatedOccupationsReducer,
    {} as IRelatedOccupationsState
  );

  return (
    <RelatedOccupationsContext.Provider value={{ state, dispatch }}>
      {children}
    </RelatedOccupationsContext.Provider>
  );
};

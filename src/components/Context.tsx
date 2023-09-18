import { useState } from 'react';
import { RelatedOccupationsContext } from '../contexts/RelatedOccupationsContext';
import { IMatchByTextResponse } from '../models/IMatchByTextResponse';
// import { RelatedOccupationsReducer } from '../reducers/RelatedOccupationsReducer';

interface IContextProps {
  children: JSX.Element;
}

export const Context = ({ children }: IContextProps) => {
  // const [state, dispatch] = useReducer(
  //   RelatedOccupationsReducer,
  //   {} as IRelatedOccupationsContext
  // );

  const [occupationsResponse, setOccupationsResponse] =
    useState<IMatchByTextResponse>({} as IMatchByTextResponse);

  return (
    <RelatedOccupationsContext.Provider
      value={{ occupationsResponse, setOccupationsResponse }}
    >
      {/* <RelatedOccupationsDispatchContext.Provider value={dispatch}> */}
      {children}
      {/* </RelatedOccupationsDispatchContext.Provider> */}
    </RelatedOccupationsContext.Provider>
  );
};

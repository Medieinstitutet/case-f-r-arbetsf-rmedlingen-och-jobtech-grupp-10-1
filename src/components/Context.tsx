import { useReducer } from 'react';
import { RelatedOccupationsDispatchContext } from '../contexts/RelatedOccupationsDispatchContext';
import { IMatchByTextResponse } from '../models/IMatchByTextResponse';
import { RelatedOccupationsReducer } from '../reducers/RelatedOccupationsReducer';

interface IContextProps {
  children: JSX.Element;
}

export const Context = ({ children }: IContextProps) => {
  const [state, dispatch] = useReducer(
    RelatedOccupationsReducer,
    {} as IRelatedOccupationsContext
  );
  return (
    <RelatedOccupationsContext.Provider value={(state, dispatch)}>
      {/* <RelatedOccupationsDispatchContext.Provider value={dispatch}> */}
      {children}
      {/* </RelatedOccupationsDispatchContext.Provider> */}
    </RelatedOccupationsContext.Provider>
  );
};

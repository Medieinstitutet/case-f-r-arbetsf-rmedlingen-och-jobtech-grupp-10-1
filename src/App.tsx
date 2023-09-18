import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { RelatedOccupationsReducer } from './reducers/RelatedOccupationsReducer';
import { useReducer } from 'react';
import { IMatchByTextResponse } from './models/IMatchByTextResponse';
import { RelatedOccupationsContext } from './contexts/RelatedOccupationsContext';
import { RelatedOccupationsDispatchContext } from './contexts/RelatedOccupationsDispatchContext';

function App() {
  const [occupations, dispatch] = useReducer(
    RelatedOccupationsReducer,
    {} as IMatchByTextResponse
  );

  return (
    <>
      <RelatedOccupationsContext.Provider value={occupations}>
        <RelatedOccupationsDispatchContext.Provider value={dispatch}>
          <RouterProvider router={router}></RouterProvider>
        </RelatedOccupationsDispatchContext.Provider>
      </RelatedOccupationsContext.Provider>
    </>
  );
}

export default App;

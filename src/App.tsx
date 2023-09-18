import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { OccupationsContextProvider } from './components/OccupationsContextProvider';

function App() {
  return (
    <div>
      <OccupationsContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </OccupationsContextProvider>
    </div>
  );
}

export default App;

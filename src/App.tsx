import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { Context } from './components/Context';

function App() {
  return (
    <>
      <Context>
        <RouterProvider router={router}></RouterProvider>
      </Context>
    </>
  );
}

export default App;

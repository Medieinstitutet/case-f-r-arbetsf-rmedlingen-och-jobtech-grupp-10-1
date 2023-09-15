import './App.scss';
import { postSearchQuery } from './services/relatedOccupationsSearchService';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';

function App() {
  const handleClick = async () => {
    const postData = 'html css javascript';
    const result = await postSearchQuery(postData);
    console.log(result);
  };

  return (
    <>
     <RouterProvider router={router}>
      <button onClick={handleClick}>Send mockdata</button>
      </RouterProvider>
    </>
  );
}

export default App;

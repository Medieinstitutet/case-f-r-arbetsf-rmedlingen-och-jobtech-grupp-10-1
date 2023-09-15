import './App.scss';
import { postSearchQuery } from './services/relatedOccupationsSearchService';

function App() {
  const handleClick = async () => {
    const postData = 'html css javascript';
    const result = await postSearchQuery(postData);
    console.log(result);
  };

  return (
    <>
      <button onClick={handleClick}>Send mockdata</button>
    </>
  );
}

export default App;

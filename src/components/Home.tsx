import { postSearchQuery } from '../services/relatedOccupationsSearchService';

export const Home = () => {
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
};

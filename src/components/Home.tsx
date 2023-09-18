import { DigiLayoutColumns } from '@digi/arbetsformedlingen-react';

import { RelatedOccupation } from './RelatedOccupation';
import {
  LayoutColumnsElement,
  LayoutColumnsVariation,
} from '@digi/arbetsformedlingen';
import { useNavigate } from 'react-router-dom';
import { RelatedOccupationsContext } from '../contexts/RelatedOccupationsContext';
import { useContext } from 'react';

export const Home = () => {

  const navigate = useNavigate();
  const handleClick = async (id: string) => {
    navigate(`/${id}`);
  };

  const { occupationsResponse } = useContext(
    RelatedOccupationsContext
  );

  // const response = mockResponsePostSearchQuery as IMatchByTextResponse;



  // useEffect(() => {
  //   const getOccupations = async () => {
  //     const occupations = await postSearchQuery('sjuksöterska sjukhus medicin patient vård vårdare sjuk frisk astma');
  //     setOccupationsResponse(occupations);
  //   };
  //   getOccupations();
  // }, []);

  // useEffect(() => {
  //   console.log(occupationsResponse);
  // }, [occupationsResponse]);

  return (
    <>

      <DigiLayoutColumns
        afElement={LayoutColumnsElement.DIV}
        afVariation={LayoutColumnsVariation.TWO}
        style={{width: '80%'}}
      >
        {occupationsResponse.related_occupations?.map((occupation) => (
          <RelatedOccupation
            key={occupation.id}
            occupation={occupation}
            handleClick={handleClick}
          />
        ))}
      </DigiLayoutColumns>
    </>
  );
};

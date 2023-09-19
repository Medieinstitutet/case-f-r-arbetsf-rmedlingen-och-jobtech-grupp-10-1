import {
  DigiLayoutColumns,
  DigiNavigationPagination,
} from '@digi/arbetsformedlingen-react';

import { RelatedOccupation } from './RelatedOccupation';
import {
  LayoutColumnsElement,
  LayoutColumnsVariation,
} from '@digi/arbetsformedlingen';
import { useNavigate } from 'react-router-dom';
import {
  IRelatedOccupationsContext,
  RelatedOccupationsContext,
} from '../contexts/RelatedOccupationsContext';
import { useContext, useState } from 'react';

export const Home = () => {
  const navigate = useNavigate();
  const handleClick = async (id: string) => {
    navigate(`/${id}`);
  };

  const { state } = useContext<IRelatedOccupationsContext>(
    RelatedOccupationsContext
  );
  const [currentResultStart, setCurrentResultStart] = useState(1);

  return (
    <div>
      {state.occupations?.hits_returned ? (
        <DigiNavigationPagination
          afTotalPages={state.occupations.hits_total / 10}
          afInitActive-page={1}
          afCurrentResultStart={currentResultStart}
          afCurrentResultEnd={currentResultStart + 9}
          afTotalResults={state.occupations.hits_total}
          afResultName="Yrken"
        >
          <DigiLayoutColumns
            afElement={LayoutColumnsElement.DIV}
            afVariation={LayoutColumnsVariation.TWO}
            style={{ width: '80%' }}
          >
            {state.occupations.related_occupations?.map((occupation) => (
              <RelatedOccupation
                key={occupation.id}
                occupation={occupation}
                handleClick={handleClick}
              />
            ))}
          </DigiLayoutColumns>
        </DigiNavigationPagination>
      ) : (
        <></>
      )}
    </div>
  );
};

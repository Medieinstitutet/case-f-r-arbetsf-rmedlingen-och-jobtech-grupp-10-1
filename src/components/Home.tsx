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
import { DigiNavigationPaginationCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { postSearchQuery } from '../services/relatedOccupationsSearchService';

export const Home = () => {
  const navigate = useNavigate();
  const handleClick = async (id: string) => {
    navigate(`/${id}`);
  };

  const { state, dispatch } = useContext<IRelatedOccupationsContext>(
    RelatedOccupationsContext
  );
  const [currentResultStart, setCurrentResultStart] = useState(1);

  async function handlePageChange(
    event: DigiNavigationPaginationCustomEvent<number>
  ) {
    console.log(event.detail);
    const offset = `&offset=${event.detail * 10}`;
    const titleQuery =
      state.latestSearch.title !== ''
        ? '&input_headline=' + state.latestSearch.title
        : '';
    const newQuery = `${state.latestSearch.keywords} ${state.latestSearch.freeText}${titleQuery}${offset}`;
    const response = await postSearchQuery(newQuery);
    dispatch({ type: 'SET_RELATED_OCCUPATIONS', payload: response });
    setCurrentResultStart(event.detail * 10);
  }

  return (
    <div>
      {state.occupations?.hits_returned ? (
        <DigiNavigationPagination
          afTotalPages={Math.floor(state.occupations.hits_total / 10)}
          afInitActive-page={1}
          afCurrentResultStart={currentResultStart}
          afCurrentResultEnd={currentResultStart + 9}
          afTotalResults={state.occupations.hits_total}
          afResultName="Yrken"
          onAfOnPageChange={(event) => {
            handlePageChange(event);
          }}
        >
          <DigiLayoutColumns
            afElement={LayoutColumnsElement.DIV}
            afVariation={LayoutColumnsVariation.TWO}
            style={{ width: '80%' }}
          >
            <div>
              {state.occupations.related_occupations?.map((occupation) => (
                <RelatedOccupation
                  key={occupation.id}
                  occupation={occupation}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </DigiLayoutColumns>
        </DigiNavigationPagination>
      ) : (
        <></>
      )}
    </div>
  );
};

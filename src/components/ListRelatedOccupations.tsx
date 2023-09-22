import {
  DigiLayoutColumns,
  DigiNavigationPagination,
} from '@digi/arbetsformedlingen-react';

import { RelatedOccupation } from './RelatedOccupation';
import {
  LayoutColumnsElement,
  LayoutColumnsVariation,
} from '@digi/arbetsformedlingen';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  IRelatedOccupationsContext,
  RelatedOccupationsContext,
} from '../contexts/RelatedOccupationsContext';
import { useContext, useEffect, useState } from 'react';
import { DigiNavigationPaginationCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { postSearchQuery } from '../services/relatedOccupationsSearchService';
import { Spinner } from './Spinner';

const ListRelatedOccupations = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchparams] = useSearchParams({ activePage: '1' });
  const handleClick = async (id: string) => {
    navigate(`/related-occupations/${id}`);
  };
  const { state, dispatch } = useContext<IRelatedOccupationsContext>(
    RelatedOccupationsContext
  );
  const [currentResultStart, setCurrentResultStart] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  async function handlePageChange(
    event: DigiNavigationPaginationCustomEvent<number>
  ) {
    setIsLoading(true);
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
    setSearchparams(
      (prev) => {
        prev.set('activePage', event.detail.toString());
        return prev;
      },
      { replace: true }
    );
  }

  useEffect(() => {
    if (!state.occupations) {
      navigate('/');
    } else {
      setIsLoading(false);
    }
  });

  return (
    <div>
      {isLoading && <Spinner></Spinner>}
      {state.occupations?.hits_returned ? (
        <DigiNavigationPagination
          afTotalPages={Math.floor(state.occupations.hits_total / 10)}
          afInitActive-page={searchParams.get('activePage')}
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

export default ListRelatedOccupations;

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

const ListRelatedOccupations = () => {
  const calculateResultStart = (updated: number) => {
    if (updated === 1) return updated;
    else return (updated - 1) * 10 + 1;
  };

  const calculateResultEnd = (updated: number) => {
    if ((updated - 1) * 10 + 10 > state.occupations.hits_total)
      return state.occupations.hits_total;
    else return (updated - 1) * 10 + 10;
  };

  const navigate = useNavigate();
  const [searchParams, setSearchparams] = useSearchParams({ activePage: '1' });
  const handleClick = async (id: string) => {
    navigate(`/related-occupations/${id}`);
  };
  const { state, dispatch } = useContext<IRelatedOccupationsContext>(
    RelatedOccupationsContext
  );
  const [currentResultCount, setCurrentResultCount] = useState<{start: number, end: number} | undefined>();

  async function handlePageChange(
    event: DigiNavigationPaginationCustomEvent<number>
  ) {
    console.log(event.detail);
    const offset = `&offset=${(event.detail - 1) * 10}`;
    const titleQuery =
      state.latestSearch.title !== ''
        ? '&input_headline=' + state.latestSearch.title
        : '';
    const newQuery = `${state.latestSearch.keywords} ${state.latestSearch.freeText}${titleQuery}${offset}`;
    const response = await postSearchQuery(newQuery);
    dispatch({ type: 'SET_RELATED_OCCUPATIONS', payload: response });
    setCurrentResultCount({
      start: calculateResultStart(event.detail),
      end: calculateResultEnd(event.detail),
    });
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
    }
    if (!currentResultCount) {
      setCurrentResultCount({
        start: calculateResultStart(Number(searchParams.get('activePage'))) || 1,
        end: calculateResultEnd(Number(searchParams.get('activePage'))) || 10,
      })
    }
  });

  return (
    <div>
      {state.occupations?.hits_returned ? (
        <DigiNavigationPagination
          afTotalPages={Math.ceil(state.occupations.hits_total / 10)}
          afInitActive-page={searchParams.get('activePage') || '1'}
          afCurrentResultStart={currentResultCount?.start}
          afCurrentResultEnd={currentResultCount?.end}
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

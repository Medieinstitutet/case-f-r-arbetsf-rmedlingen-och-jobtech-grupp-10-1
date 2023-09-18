import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEnrichedOccupation } from '../services/enrichedOccupationsSearchService';
import { IEnrichedOccupationsResponse } from '../models/IEnrichedOccupationsResponse';
import { ICompetencies } from '../models/ICompetencies';
import { IOccupationGroup } from '../models/IOccupationGroup';
import {
  DigiLayoutContainer,
  DigiList,
  DigiLoaderSpinner,
  DigiTypography,
  DigiTypographyHeadingJumbo,
} from '@digi/arbetsformedlingen-react';
import {
  ListType,
  LoaderSpinnerSize,
  TypographyHeadingJumboLevel,
} from '@digi/arbetsformedlingen';

export const EnrichedOccupation = () => {
  const { id } = useParams();
  const [occupation, setOccupation] = useState(
    {} as IEnrichedOccupationsResponse
  );
  const [competencies, setCompetencies] = useState([] as ICompetencies[]);
  const [occupationGroup, setOccupationGroup] = useState(
    {} as IOccupationGroup
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      if (id) {
        const result = await getEnrichedOccupation(id);
        setOccupation(result);
        setCompetencies(
          result.metadata.enriched_candidates_term_frequency.competencies
        );
        setOccupationGroup(result.occupation_group);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      {isLoading && (
        <DigiLoaderSpinner afSize={LoaderSpinnerSize.LARGE}></DigiLoaderSpinner>
      )}
      <DigiLayoutContainer afVerticalPadding>
        <DigiTypography af-variation="large">
          <DigiTypographyHeadingJumbo
            afText={occupation.occupation_label}
            afLevel={TypographyHeadingJumboLevel.H1}
          ></DigiTypographyHeadingJumbo>
          <p>{occupationGroup.occupation_group_label}</p>
          <DigiList afListType={ListType.NUMBERED}>
            {competencies.slice(0, 10).map((competency) => (
              <li key={competency.term}>{competency.term}</li>
            ))}
          </DigiList>
        </DigiTypography>
      </DigiLayoutContainer>
    </>
  );
};

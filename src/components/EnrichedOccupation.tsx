import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEnrichedOccupation } from '../services/enrichedOccupationsSearchService';
import { IEnrichedOccupationsResponse } from '../models/IEnrichedOccupationsResponse';
import { ICompetencies } from '../models/ICompetencies';
import { IOccupationGroup } from '../models/IOccupationGroup';
import {
  DigiBarChart,
  DigiLayoutContainer,
  DigiLoaderSpinner,
  DigiTypography,
  DigiTypographyHeadingJumbo,
} from '@digi/arbetsformedlingen-react';
import {
  LoaderSpinnerSize,
  TypographyHeadingJumboLevel,
} from '@digi/arbetsformedlingen';
import { IChartData } from '../models/IChartData';

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

  const chartData: IChartData = {
    data: {
      xValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      series: [
        {
          yValues:
            // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            competencies
              .slice(0, 10)
              .map((competency) => competency.percent_for_occupation),
          title: 'Kompetens',
          colorToken: 'blue',
        },
      ],
      xValueNames:
        // ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        competencies.slice(0, 10).map((competency) => competency.term),
    },
    x: 'Kompetens',
    y: 'Procent',
    title: 'Kompetenser',
    subTitle: 'Dom 10 mest eftertraktade kompetenserna för detta yrket är:',
    meta: {
      valueLabels: true,
      labelProperties: {
        significantDigits: 3,
        shortHand: true,
      },
    },
  };

  return (
    <div>
      {isLoading && (
        <DigiLoaderSpinner afSize={LoaderSpinnerSize.LARGE}></DigiLoaderSpinner>
      )}
      <DigiLayoutContainer afVerticalPadding>
        <DigiTypography af-variation="large">
          <DigiTypographyHeadingJumbo
            afText={occupation.occupation_label}
            afLevel={TypographyHeadingJumboLevel.H1}
          ></DigiTypographyHeadingJumbo>
          <DigiBarChart afChartData={chartData}></DigiBarChart>
        </DigiTypography>
      </DigiLayoutContainer>
    </div>
  );
};

import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getEnrichedOccupation } from '../services/enrichedOccupationsSearchService';
import { IEnrichedOccupationsResponse } from '../models/IEnrichedOccupationsResponse';
import { ICompetencies } from '../models/ICompetencies';
import { IOccupationGroup } from '../models/IOccupationGroup';
import {
  DigiBarChart,
  DigiIconArrowBack,
  DigiButton,
  DigiLayoutContainer,
  DigiLoaderSpinner,
  DigiTypography,
  DigiTypographyHeadingJumbo,
} from '@digi/arbetsformedlingen-react';
import {
  ButtonSize,
  ButtonVariation,
  LoaderSpinnerSize,
  TypographyHeadingJumboLevel,
} from '@digi/arbetsformedlingen';
import { IChartData } from '../models/IChartData';
import './EnrichedOccupation.scss';

export const EnrichedOccupation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
          yValues: competencies
            .slice(0, 10)
            .map((competency) => competency.percent_for_occupation),
          title: 'Kompetens',
          colorToken: 'blue',
        },
      ],
      xValueNames: competencies
        .slice(0, 10)
        .map((competency) => competency.term),
    },
    x: 'Kompetens',
    y: 'Procent',
    title: 'Dom 10 mest eftertraktade Kompetenserna',
    subTitle: `Yrkesgrupp: ${occupationGroup.occupation_group_label}`,
    infoText: `Talet står för hur många procent som en viss kompetens utgör inom annonser för ett visst yrke.`,
  };

  return (
    <div>
      {isLoading && (
        <DigiLoaderSpinner
          afSize={LoaderSpinnerSize.LARGE}
          className="spinner"
        ></DigiLoaderSpinner>
      )}
      <DigiLayoutContainer afVerticalPadding>
        <Link to={'/related-occupations'}></Link>
        <DigiTypography af-variation="large">
          <DigiTypographyHeadingJumbo
            afText={occupation.occupation_label}
            afLevel={TypographyHeadingJumboLevel.H1}
          ></DigiTypographyHeadingJumbo>
          <DigiButton
            onAfOnClick={() => navigate(-1)}
            afSize={ButtonSize.SMALL}
            afVariation={ButtonVariation.FUNCTION}
          >
            {' '}
            <DigiIconArrowBack
              afTitle="Tillbaka"
              style={{ width: '35px' }}
            ></DigiIconArrowBack>
          </DigiButton>
          <div className="chartContainer">
            {competencies.length !== 0 ? (
              <DigiBarChart afChartData={chartData}></DigiBarChart>
            ) : (
              <></>
            )}
          </div>
        </DigiTypography>
      </DigiLayoutContainer>
    </div>
  );
};

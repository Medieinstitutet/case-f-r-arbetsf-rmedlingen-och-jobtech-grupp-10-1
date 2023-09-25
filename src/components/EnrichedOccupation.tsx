import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getEnrichedOccupation } from '../services/enrichedOccupationsSearchService';
import { IEnrichedOccupationsResponse } from '../models/IEnrichedOccupationsResponse';
import { ICompetencies } from '../models/ICompetencies';
import { IOccupationGroup } from '../models/IOccupationGroup';
import {
  DigiBarChart,
  DigiButton,
  DigiLayoutContainer,
  DigiTypography,
  DigiTypographyHeadingJumbo,
  DigiIconArrowLeft,
  DigiChartLine,
} from '@digi/arbetsformedlingen-react';
import {
  ButtonSize,
  ButtonVariation,
  TypographyHeadingJumboLevel,
} from '@digi/arbetsformedlingen';
import { IChartData } from '../models/IChartData';
import './EnrichedOccupation.scss';
import { Spinner } from './Spinner';
import { getSCBStatistics } from '../services/SCBStatisticsService';

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
  const [averageSalaries, setAverageSalaries] = useState([] as number[]);

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
        getAverageSalary(result.occupation_group.ssyk);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const getAverageSalary = async (ssyk: string) => {
    const response = await getSCBStatistics(ssyk);
    const averageSalaries = response.data.map((salary: any) =>
      Number(salary.values[0])
    );
    setAverageSalaries(averageSalaries);
  };

  const competencyData: IChartData = {
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
        .map(
          (competency) =>
            competency.term.charAt(0).toUpperCase() + competency.term.slice(1)
        ),
    },
    x: 'Kompetens',
    y: 'Procent',
    title: 'Dom 10 mest eftertraktade Kompetenserna',
    subTitle: `Yrkesgrupp: ${occupationGroup.occupation_group_label}`,
    infoText: `Talet står för hur många procent som en viss kompetens utgör inom annonser för ett visst yrke.`,
  };

  const salaryData: IChartData = {
    data: {
      xValues: [1, 2, 3, 4, 5],
      series: [
        {
          yValues: averageSalaries,
          title: 'Lön',
        },
      ],
      xValueNames: ['2018', '2019', '2020', '2021', '2022'],
    },
    x: 'År',
    y: 'Lön',
    title: 'Löneutveckling'
  };

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
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
              <DigiIconArrowLeft afTitle="Tillbaka" style={{ width: '35px' }} />
            </DigiButton>
            <div className="chartContainer">
              {competencies.length !== 0 ? (
                <DigiBarChart
                  afChartData={competencyData}
                  af-heading-level="h2"
                ></DigiBarChart>
              ) : (
                <></>
              )}
            </div>
            <div className="chartContainer">
              {averageSalaries.length !== 0 ? (
                <DigiChartLine
                  afChartData={salaryData}
                  af-heading-level="h2"
                ></DigiChartLine>
              ) : (
                <></>
              )}
            </div>
          </DigiTypography>
        </DigiLayoutContainer>
      )}
    </div>
  );
};

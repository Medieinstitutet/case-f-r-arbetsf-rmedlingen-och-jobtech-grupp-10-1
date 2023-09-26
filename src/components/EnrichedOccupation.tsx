import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getEnrichedOccupation } from '../services/enrichedOccupationsSearchService';
import { IEnrichedOccupationsResponse } from '../models/IEnrichedOccupationsResponse';
import { ICompetencies } from '../models/ICompetencies';
import { IOccupationGroup } from '../models/IOccupationGroup';
import {
  DigiButton,
  DigiLayoutContainer,
  DigiTypography,
  DigiTypographyHeadingJumbo,
  DigiIconArrowLeft,
  DigiDialog,
} from '@digi/arbetsformedlingen-react';
import {
  ButtonSize,
  ButtonVariation,
  TypographyHeadingJumboLevel,
} from '@digi/arbetsformedlingen';
import './EnrichedOccupation.scss';
import { Spinner } from './Spinner';
import { getSCBStatistics } from '../services/SCBStatisticsService';
import { CompetencyChart } from './CompetencyChart';
import { SalariesChart } from './SalariesChart';

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
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [averageSalaries, setAverageSalaries] = useState([] as number[]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      if (id) {
        try {
          const result = await getEnrichedOccupation(id);
          setOccupation(result);
          setCompetencies(
            result.metadata.enriched_candidates_term_frequency.competencies
          );
          setOccupationGroup(result.occupation_group);
          await getAverageSalary(result.occupation_group.ssyk);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
          import.meta.env.DEV && setShowErrorModal(true);
        }
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

  return (
    <div>
      <DigiDialog
        afShowDialog={showErrorModal}
        afHeading="Något gick fel, troligtvis behöver du aktivera CORS. Vill du göra det, tryck OK, annars avbryt"
        onAfPrimaryButtonClick={() =>
          window.location.replace('https://cors-anywhere.herokuapp.com/')
        }
        onAfSecondaryButtonClick={() => setShowErrorModal(false)}
        afPrimaryButtonText="OK"
        afSecondaryButtonText="Avbryt"
        afCloseButtonText=''
      />
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
                <CompetencyChart
                  competencies={competencies}
                  occupationGroup={occupationGroup}
                />
              ) : (
                <></>
              )}
            </div>
            <div className="chartContainer">
              {averageSalaries.length !== 0 ? (
                <SalariesChart averageSalaries={averageSalaries} />
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

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEnrichedOccupation } from '../services/enrichedOccupationsSearchService';
import { IEnrichedOccupationsResponse } from '../models/IEnrichedOccupationsResponse';
import { ICompetencies } from '../models/ICompetencies';
import { IOccupationGroup } from '../models/IOccupationGroup';

export const EnrichedOccupation = () => {
  const { id } = useParams();
  const [occupation, setOccupation] = useState(
    {} as IEnrichedOccupationsResponse
  );
  const [competencies, setCompetencies] = useState([] as ICompetencies[]);
  const [occupationGroup, setOccupationGroup] = useState(
    {} as IOccupationGroup
  );

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await getEnrichedOccupation(id);
        setOccupation(result);
        setCompetencies(
          result.metadata.enriched_candidates_term_frequency.competencies
        );
        setOccupationGroup(result.occupation_group);

        console.log(result);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <h1>{occupation.occupation_label}</h1>
      <p>{occupationGroup.occupation_group_label}</p>
      <ul>
        {competencies.slice(0, 10).map((competency) => (
          <li key={competency.term}>{competency.term}</li>
        ))}
      </ul>
    </div>
  );
};

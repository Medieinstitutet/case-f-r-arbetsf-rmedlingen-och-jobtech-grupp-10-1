import { ICompetencies } from './ICompetencies';
import { IGeos } from './IGeos';
import { IOccupationGroup } from './IOccupationGroup';
import { IOccupations } from './IOccupations';
import { ITraits } from './ITraits';

export interface IEnrichedOccupationsResponse {
  id: string;
  occupation_label: string;
  concept_taxonomy_id: string;
  legacy_ams_taxonomy_id: string;
  occupation_group: IOccupationGroup;
  metadata: {
    enriched_ads_count: number;
    enriched_ads_total_count: number;
    enriched_ads_percent_of_total: number;
    enriched_candidates_term_frequency: {
      competencies: ICompetencies[];
      geos: IGeos[];
      occupations: IOccupations[];
      traits: ITraits[];
    };
  };
}

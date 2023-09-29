import { IEnrichedOccupationsResponse } from '../models/IEnrichedOccupationsResponse';
import { get } from './serviceBase';

const BASE_URL =
  'https://jobed-connect-api.jobtechdev.se/v1/enriched_occupations?occupation_id=';

export async function getEnrichedOccupation(id: string) {
  const response = await get<IEnrichedOccupationsResponse>(
    `${BASE_URL}${id}&include_metadata=true`
  );

  return response;
}

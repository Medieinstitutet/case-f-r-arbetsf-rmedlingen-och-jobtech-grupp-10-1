import { IMatchByTextResponse } from "../models/IMatchByTextResponse";
import { post } from "./serviceBase";

const BASE_URL = 'https://jobed-connect-api.jobtechdev.se/v1/occupations/match-by-text?input_text='

export async function postSearchQuery(query: string) {
  const response = await post<IMatchByTextResponse>(`${BASE_URL}${query}`);

  return response
}
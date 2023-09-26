
import { IScbRequest } from '../models/IScbRequest';
import { IScbResponse } from '../models/IScbResponse';
import { post } from './serviceBase';
// import axios from 'axios';

const generateQueryValues = () => {
  const thisYear = new Date().getFullYear();
  const values = [];
  for (let year = - 5; year < 0; year++) {
    values.push((thisYear + year).toString());
  }
  return values;
}

const BASE_URL =
  'https://api.scb.se/OV0104/v1/doris/sv/ssd/START/AM/AM0110/AM0110A/LonYrkeRegion4A';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

export const getSCBStatistics = async (ssyk: string) => {
  const requestBody: IScbRequest = {
    query: [
      {
        code: 'Yrke2012',
        selection: {
          filter: 'item',
          values: [ssyk],
        },
      },
      {
        code: 'ContentsCode',
        selection: {
          filter: 'item',
          values: ['000000BW'],
        },
      },
      {
        code: 'Tid',
        selection: {
          filter: 'item',
          values: generateQueryValues(),
        },
      },
    ],
    response: {
      format: 'json',
    },
  };

  // const response = await axios.post(`${PROXY_URL}${BASE_URL}`, requestBody);
  const response = await post<IScbResponse, IScbRequest>(`${PROXY_URL}${BASE_URL}`, requestBody);  

  return response;
};

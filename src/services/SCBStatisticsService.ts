import { IScbResponse } from '../models/ISCBResponse';
import { IScbRequest } from '../models/IScbRequest';
import { post } from './serviceBase';

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
          values: ['2018', '2019', '2020', '2021', '2022'],
        },
      },
    ],
    response: {
      format: 'json',
    },
  };

  const response = await post<IScbResponse, IScbRequest>(
    `${PROXY_URL}${BASE_URL}`,
    requestBody
  );

  return response.data;
};

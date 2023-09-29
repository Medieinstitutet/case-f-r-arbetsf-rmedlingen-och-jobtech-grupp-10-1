import * as serviceBase from '../../services/serviceBase';
import axios from 'axios';
import { postSearchQuery } from '../../services/relatedOccupationsSearchService';

describe('relatedOccupationsSearchService', () => {
  beforeAll(() => {
    jest.mock('axios');
    axios.get = jest.fn().mockResolvedValue({ data: 'mockData' });
    axios.post = jest.fn().mockResolvedValue({ data: 'mockData' });
  });
  it('should call serviceBase.post', async () => {
    const serviceBaseSpy = jest.spyOn(serviceBase, 'post');

    await postSearchQuery('mockQuery');    

    expect(serviceBaseSpy).toHaveBeenCalledTimes(1);
  });
});

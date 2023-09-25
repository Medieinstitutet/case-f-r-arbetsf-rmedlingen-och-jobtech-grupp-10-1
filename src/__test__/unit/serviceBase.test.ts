import axios from 'axios';
import { get, post } from '../../services/serviceBase';

describe('serviceBase', () => {
  beforeAll(() => {
    jest.mock('axios');
  });
  it('should return mockData from get', async () => {
    axios.get = jest.fn().mockResolvedValue({ data: 'mockData' });
    const data = await get<{ data: string }>('mockUrl');
    expect(data).toBe('mockData');
  });

  it('should return mockData from post', async () => {
    axios.post = jest.fn().mockResolvedValue({ data: 'mockData' });
    const data = await post<{ data: string }>('mockUrl');
    expect(data).toBe('mockData');
  });
});

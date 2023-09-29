import axios, { AxiosResponse } from 'axios';

export async function get<T>(url: string) {
  const response = await axios.get<T>(url);

  return response.data;
}

export async function post<T, K = undefined>(url: string, data?: K) {
  let response: AxiosResponse<T>;
  if (data) {
    response = await axios.post<T>(url, data);
  } else {
    response = await axios.post<T>(url);
  }
  
  return response.data;
}

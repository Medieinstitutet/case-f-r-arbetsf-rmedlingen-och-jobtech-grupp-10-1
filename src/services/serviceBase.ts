import axios from 'axios';

export async function get<T>(url: string) {
  const response = await axios.get<T>(url);

  return response.data;
}

export async function post<T, K = undefined>(url: string, data?: K) {
  let response;
  if (data) {
    response = await axios.post<T, K>(url, data);
  } else {
    response = await axios.post<T>(url);
  }
  response = await axios.post<T>(url);
  console.log(response.data);

  return response.data;
}

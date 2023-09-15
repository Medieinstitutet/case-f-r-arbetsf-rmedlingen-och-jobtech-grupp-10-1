import axios from "axios";

export async function get<T>(url: string) {
  const response = await axios.get<T>(url);

  return response.data
}

export async function post<T>(url: string) {
  const response = await axios.post<T>(url);

  return response.data
}


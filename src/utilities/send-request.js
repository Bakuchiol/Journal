import { getToken } from './users-service';
// import axios from 'axios';

export default async function sendRequest(url, method = 'GET', payload = null) {
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  if (res.ok) return res.json();
  throw new Error('Bad Request');

  // *** AXIOS ***
  // const axiosInstance = axios.create({
  //   baseURL: 'your_base_url_here', // Replace with your API base URL
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  // const token = getToken();
  // if (token) {
  //   axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  // }

  // try {
  //   const response = await axiosInstance({
  //     method,
  //     url,
  //     data: payload,
  //   });

  //   if (response.status >= 200 && response.status < 300) {
  //     return response.data;
  //   } else {
  //     throw new Error('Bad Request');
  //   }
  // } catch (error) {
  //   throw new Error('Bad Request');
  // }
}
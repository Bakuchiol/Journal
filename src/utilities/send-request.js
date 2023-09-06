import { getToken } from './users-service';
// import axios from 'axios';

export default async function sendRequest(url, method = 'GET', payload = null) {

  // const res = method === 'GET' ? await axios.get(url) : await axios.post(url, payload);

  // if( res.status !== 200 ) throw new Error('Bad Request')

  // return res.data

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
}
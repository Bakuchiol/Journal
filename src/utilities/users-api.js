import sendRequest from "./send-request";
import * as tokenService from "./users-service";
import {addPhoto} from "./profile-service"
const BASE_URL = '/api/users';

// export function signUp(userData, photo) {
//   return sendRequest(BASE_URL, 'POST', userData, photo);
// }

export async function signUp(user, photo){
  try {
    const res = await fetch(`${BASE_URL}`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    const json = await res.json()
    if(json.err){
      throw new Error(json.err)
    }else if(json.token){
      tokenService.getToken(json.token)
      if(photo){
        const photoData = new FormData()
        photoData.append('photo', photo)
        return await addPhoto(
          photoData,
          tokenService.getUser().profile
        )
      }
    }
  } catch (err) {
    throw err
  }
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

// export function checkToken() {
//   return sendRequest(`${BASE_URL}/check-token`);
// }
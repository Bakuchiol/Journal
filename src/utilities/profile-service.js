import * as tokenService from "./tokenService";

const BASE_URL = "/api/users";

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  });
  return await res.json();
}

async function addPhoto(photoData, profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
    body: photoData,
  });
  return await res.json();
}

async function getMyProfile() {
  const res = await fetch(`${BASE_URL}/my-profile`, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  });
  return await res.json();
}

export {
  getAllProfiles,
  addPhoto,
  getMyProfile
};

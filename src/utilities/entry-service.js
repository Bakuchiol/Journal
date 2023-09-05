import sendRequest from "./send-request";
const BASE_URL = '/api/users';

export function journal(id){
    return sendRequest(`${BASE_URL}/journal`, 'GET', id)
}

export function create(entryData){
    return sendRequest(`${BASE_URL}/new`, 'POST', entryData)
}

export function edit(id){
    return sendRequest(`${BASE_URL}/edit/${id._id}`, 'PUT', id)
}

export function deleteOne(id){
    return sendRequest(`${BASE_URL}/delete/${id._id}`, 'DELETE', id)
}
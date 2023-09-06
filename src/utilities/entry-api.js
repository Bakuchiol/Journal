import sendRequest from "./send-request";
const BASE_URL = '/api/entry';

export function journal(id){
    return sendRequest(`${BASE_URL}/journal`, 'GET', id)
}

export function newEntry(entryData){
    return sendRequest(`${BASE_URL}/newEntry`, 'POST', entryData)
}

export function edit(id){
    return sendRequest(`${BASE_URL}/edit/${id._id}`, 'PUT', id)
}

export function deleteOne(id){
    return sendRequest(`${BASE_URL}/delete/${id._id}`, 'DELETE', id)
}
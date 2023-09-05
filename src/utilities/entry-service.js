import * as entryAPI from './entry-api'

export async function journal(entryId){
    const data = await entryAPI.read(entryId)
    return data
}

export async function newEntry(entryData){
    const data = await entryAPI.read(entryData)
    return data
}

export async function editEntry(editId){
    const data = await entryAPI.read(editId)
    return data
}
import * as entryAPI from './entry-api'

export async function journal(entryId){
    const data = await entryAPI.journal(entryId)
    return data
}

export async function newEntry(entryData){
    const data = await entryAPI.newEntry(entryData)
    return data
}

export async function editEntry(editId){
    const data = await entryAPI.edit(editId)
    return data
}
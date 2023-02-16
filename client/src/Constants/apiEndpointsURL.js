import {url} from './apiBaseURL'

export const loginURL = `${url}/login`

export const getClientsURL = `${url}/clients/getAll`

export const deleteClientURL = (cpf)=>{
    return `${url}/clients/delete/${cpf}`
}

export const clientDetailURL = (cpf)=>{
    return `${url}/clients/detail/${cpf}`
}

export const clientUpdateURL = (cpf)=>{
    return `${url}/clients/update/${cpf}`
}

export const createClientURL = `${url}/clients/create`

export const createAddressURL = `${url}/clients/address/create`

export const deleteAddressURL = (id)=>{
    return `${url}/clients/address/delete/${id}`
}

export const updateAddressURL = (id)=>{
    return `${url}/clients/address/update/${id}`
}

export const getAddressURL = (cpf)=>{
    return `${url}/clients/address/${cpf}`
}

export const tokenValidationURL = (token)=>{
    return `${url}/token-validation/${token}`
}


import sendRequest from './send-request'

// this is the base path of the Express route that we define
const BASE_URL = '/api/users'

export async function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData)
}

export async function logIn(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}
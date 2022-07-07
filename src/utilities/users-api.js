import sendRequest from './send-request'

// this is the base path of the Express route that we define
const BASE_URL = '/api/users'

export async function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData)
}

export async function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

export async function changeUsername(userData) {
    return sendRequest(`${BASE_URL}/changeUsername`, 'POST', userData)
}

export async function changePassword(userData){
    return sendRequest(`${BASE_URL}/changePassword`,'POST', userData )
}
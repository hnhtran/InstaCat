import * as usersAPI from './users-api'

export async function signUp(userData) {
    // delegate the network request code to the users-api.js
    // module which will ultimately return JWT
    const token = await usersAPI.signUp(userData)
    localStorage.setItem('token', token)
    return getUser()
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials)
    localStorage.setItem('token', token)
    return getUser()
}

export function logOut() {
    localStorage.removeItem('token')
}

// ================== Helper functions ==================
// getToken

// getUser
export function getUser() {
    const token = getToken()
    // token have 3 parts, header, payload, and sth, they seperate by '.' , payload is data we want at index[1] of course
    return token ? JSON.parse(window.atob(token.split('.'[1]))).user : null
}

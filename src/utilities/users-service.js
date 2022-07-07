import * as usersAPI from './users-api'

export async function signUp(userData) {
    // delegate the network request code to the users-api.js
    // module which will ultimately return JWT
    const token = await usersAPI.signUp(userData)
    console.log(token)
    localStorage.setItem('token', token)
    return getUser()
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials)
    localStorage.setItem('token', token)
    return getUser()
}

export async function changeUsername(userData) {
    const token = await usersAPI.changeUsername(userData)
    localStorage.setItem('token', token)
    return getUser()
}
export async function changePassword(userData) {
    const token = await usersAPI.changePassword(userData)
    localStorage.setItem('token', token)
    return getUser()
}


export function logOut() {
    localStorage.removeItem('token')
}

// ================== Helper functions ==================
// getToken
export function getToken() {
    // getItem return null if there is no key
    const token = localStorage.getItem('token')
    if(!token) return null
    // else if there is a token, return it
    const payload = JSON.parse(window.atob(token.split('.')[1]))
    // if token expires, return null, if not return token
    if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token')
        return null
    }
    return token
}
// getUser
export function getUser() {
    const token = getToken()
    // token have 3 parts, header, payload, and signature, they seperate by '.' , payload is data we want at index[1] of course
    return token ? JSON.parse(window.atob(token.split('.')[1])).user : null
}

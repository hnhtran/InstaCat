import * as usersAPI from './users-api'

export async function signUp(userData) {
    // delegate the network request code to the users-api.js
    // module which will ultimately return JWT
    const token = await usersAPI.signUp(userData)
    localStorage.setItem('token', token)
    return getUser()
}
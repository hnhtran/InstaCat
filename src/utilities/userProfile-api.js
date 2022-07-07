import sendRequest from './send-request';

const BASE_URL = '/api/users/profiles'

export function getPosts(userId) {
    return sendRequest(`/api/users/profiles/${userId}`)
}

export function createPost(postData) {
    return sendRequest(`${BASE_URL}`, 'POST', postData)
}
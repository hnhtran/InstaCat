import sendRequest from './send-request';

const BASE_URL = '/api/users/profiles'

export function getPosts(userId) {
    return sendRequest(`${BASE_URL}/${userId}`)
}

export function createPost(postData, userId) {
    return sendRequest(BASE_URL, 'POST', postData)
}

export function deletePost(userId, postIdObj) {
    return sendRequest(`${BASE_URL}/${userId}`, 'DELETE', postIdObj)
}

export function updatePost(userId, postIdObjData) {
    return sendRequest(`${BASE_URL}/${userId}`, 'PUT', postIdObjData)
}
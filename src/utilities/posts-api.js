import sendRequest from './send-request';

const BASE_URL = '/api/posts'

export function getPosts() {
    return sendRequest(`/`)
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

// export function createPost(postData) {
//     return sendRequest(`${BASE_URL}`, 'POST', postData)
// }

export function deletePost(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE', id)
}
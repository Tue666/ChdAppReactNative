export function googleApi(url, method = 'GET', accessToken) {
    return fetch(url, {
        method: method,
        headers: {
            Authorization: 'Bearer ' + accessToken
        }
    });
}
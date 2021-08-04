export function googleApi(url, method, accessToken, body = {}) {
    if (Object.keys(body).length !== 0) {
        return fetch(url, {
            method: method,
            headers: {
                Authorization: 'Bearer ' + accessToken,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }
    return fetch(url, {
        method: method,
        headers: {
            Authorization: 'Bearer ' + accessToken
        }
    });
}
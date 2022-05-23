export const apiHost = 'https://localhost:7298/api';

export const apiAuth = (jwt) => {
    return {
        headers: {
            Authorization: "Bearer " + jwt
        }
    }
}
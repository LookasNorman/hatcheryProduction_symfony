import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'https://production.lookaskonieczny.com/api';
const responseBody = response => response.body;

let token = window.localStorage.getItem('jwtToken');

const tokenPlugin = secured => {
    let token = window.localStorage.getItem('jwtToken');
    return (request) => {
            request.set('Authorization', `Bearer ${token}`);
        }
}

export const request = {
    get: (url, secured = false) => {
        return superagent.get(`${API_ROOT}${url}`).use(tokenPlugin(secured)).then(responseBody)
    },
    post: (url, body = null, secured = true) => {
        return superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin(secured)).then(responseBody)
    },
    setToken: (newJwtToken) => token => {
        return newJwtToken
    }
};

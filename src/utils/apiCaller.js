import axios from 'axios';

import { API_URL } from '../config';

const request = (endpoint, method, headers, params, body) => {
    return axios({
        url: API_URL + endpoint,
        method: method,
        headers: Object.assign({}, headers),
        params: Object.assign({}, params),
        data: body,
        mode: 'cors',
        withCredentials: true,
    });
};

export const get = (endpoint, params = {}, headers = {}) => {
    return request(endpoint, 'GET', headers, params);
};

export const post = (endpoint, body = {}, params = {}, headers = {}) => {
    return request(endpoint, 'POST', headers, params, body);
};

export const put = (endpoint, body = {}, params = {}, headers = {}) => {
    return request(endpoint, 'PUT', headers, params, body);
};

export const remove = (endpoint, body = {}, params = {}, headers = {}) => {
    return request(endpoint, 'DELETE', headers, params, body);
};

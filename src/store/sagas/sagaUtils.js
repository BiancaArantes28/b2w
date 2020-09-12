import axios from 'axios';

export function fetchGet(endpoint) {

    return axios.get(endpoint);
}
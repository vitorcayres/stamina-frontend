import axios from 'axios'
import * as env from '../constants'

let url_backend = env.URL_BACKEND;

export function addUsers(body) {
    return axios.post(url_backend + `/usersAdd`);
}
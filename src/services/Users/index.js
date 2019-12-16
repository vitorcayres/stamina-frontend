import axios from 'axios'
import * as env from '../../constants'

/**
 * Constants
 */
const URL = env.URL_BACKEND;
const HEADERS = {
    'Content-Type': 'application/json',
}

/**
 * Add User
 * @param {json} body 
 */
export function addUsers(body){
    return axios.post(`${URL}/usersAdd`, body, { headers: HEADERS });
}
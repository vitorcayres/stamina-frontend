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
 * Add user
 * @param {json} body 
 */
export function addUsers(body){
    return axios.post(`${URL}/usersAdd`, body, { headers: HEADERS });
}

/**
 * Get user by phone
 * @param {json} body 
 */
export function getUserbyPhone(phoneNumber){
    return axios.get(`${URL}/usersListByPhone/${phoneNumber}`, { headers: HEADERS });
}
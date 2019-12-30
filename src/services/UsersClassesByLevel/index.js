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
 * Add Users Classes By Level
 * @param {json} body 
 */
export function addUsersClassesByLevel(body){
    return axios.post(`${URL}/usersClassesByLevelAdd`, body, { headers: HEADERS });
}
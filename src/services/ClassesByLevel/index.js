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
 * Get classes by level
 * @param {json} body 
 */
export function getClassesByLevel(body){
    return axios.get(`${URL}/classesByLevelList`, { headers: HEADERS });
}
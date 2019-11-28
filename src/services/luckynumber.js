import axios from 'axios'
import * as env from '../constants'

let url_backend = env.URL_BACKEND;
let headers = {
    'X-FS-Requester-Name' : 'promocaomandapremios',
    'X-FS-Brand-Name' : 'promocaomandapremios'
};

/** get series by phone */
export function getSeriesByPhone(phone) {
    return axios.get(url_backend + `/bff/api/v1/luckynumber/api/series/55${phone}/10`, headers)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return ({ error: error })
        });
}

/** get luckynumber by series phone */
export function getLuckynumberBySeriesPhone(phone, serie_id) {
    return axios.get(url_backend + `/bff/api/v1/luckynumber/api/get/55${phone}/10/${serie_id}`, headers)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return ({ error: error })
        });
}

/** get all winners promotions */
export function getAllWinnersPromotions(serie_id) {
    return axios.get(url_backend + '/bff/api/v1/luckynumber/api/winner/10', headers)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return ({ error: error })
        });
}
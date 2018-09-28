import { RSAA } from "redux-api-middleware";

import * as types from './types';

const HEADERS_BASE = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

const API_URL_BASE = 'http://localhost:8000/';

export const fetchOrders = () => {
    return {
        [RSAA]: {
            endpoint: API_URL_BASE + 'orders',
            method: 'GET',
            types: [ 
                types.ORDERS_FETCH_REQUEST,
                types.ORDERS_FETCH_SUCCESS,
                types.ORDERS_FETCH_FAILURE
            ],
            headers: HEADERS_BASE
        }
    }
};
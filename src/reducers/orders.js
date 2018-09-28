import { ORDERS_FETCH_SUCCESS } from "../actions";

const orders = (
    state = {
        list: []
    },
    action
) => {
    switch (action.type) {
        case ORDERS_FETCH_SUCCESS:
            return {
                list: action.payload
            };
        default:
            return state;
    }
};

export default orders;
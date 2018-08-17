const orders = (state = [], action) => {
    switch (action.type) {
    case "ADD_ORDER": {
        const newOrders = state.orders.concat({
            symbol: action.symbol,
            num_contracts: action.num_contracts,
            fill_price: action.fill_price,
            commission: action.commission,
            action: action.action,
            time: action.time
        });

        return Object.assign({}, state, { orders: newOrders });
    }
    default:
        return state;
    }
};

export default orders;
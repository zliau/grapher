const orders = (state = [], action) => {
    switch (action.type) {
    case "ADD_ORDER": {
        return [
            ...state,
            {
                sym: action.sym,
                qty: action.qty,
                price: action.price,
                com: action.com,
                act: action.act,
                time: action.time
            }
        ];
    }
    default:
        return state;
    }
};

export default orders;
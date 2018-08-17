let nextOrderId = 0;

const addOrder = order => ({
    type: "ADD_ORDER",
    id: nextOrderId++,
    symbol: order.symbol,
    quantity: order.quantity,
    fill_price: order.fill_price,
    commission: order.commission,
    action: order.action,
    time: order.time
});

export default addOrder;
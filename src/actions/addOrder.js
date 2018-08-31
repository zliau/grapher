let nextOrderId = 0;

const addOrder = order => ({
    type: "ADD_ORDER",
    id: nextOrderId++,
    sym: order.sym,
    qty: order.qty,
    price: order.price,
    com: order.com,
    act: order.act,
    time: order.time
});

export default addOrder;
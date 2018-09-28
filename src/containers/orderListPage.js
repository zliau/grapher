import React from "react";
import { connect } from "react-redux";

import { fetchOrders } from "../actions";
import OrderList from "../components/orderList";

class OrderListPage extends React.Component {
    componentDidMount() {
        this.props.fetchOrders();
    }

    render() {
        return (
            <div>
                <OrderList orders={this.props.orders}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    orders: state.orders.list
});

const mapDispatchToProps = {
    fetchOrders
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderListPage);
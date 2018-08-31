import { connect } from "react-redux";

import OrderList from "../components/orderList";

const mapStateToProps = state => state.orders;

const VisibleOrderList = connect(mapStateToProps)(OrderList);

export default VisibleOrderList;
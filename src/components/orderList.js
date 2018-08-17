import React from "react";
import ReactTable from "react-table";
import PropTypes from "prop-types";
import "react-table/react-table.css";

function OrderList(props, { store }) {
    const state = store.getState();
    const tableData = state.orders;
    const columns = [
        { Header: "Symbol", accessor: "sym" },
        { Header: "Quantity", accessor: "qty" },
        { Header: "Price", accessor: "price" },
        { Header: "Commission", accessor: "com" },
        { Header: "Action", accessor: "act" },
        { Header: "Time", accessor: "time" }
    ];

    return (
        <ReactTable
            data={tableData}
            columns={columns}
        />
    );
}

OrderList.contextTypes = {
    store: PropTypes.object
};

export default OrderList;
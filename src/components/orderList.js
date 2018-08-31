import React from "react";
import ReactTable from "react-table";
import PropTypes from "prop-types";
import "react-table/react-table.css";

function OrderList({ orders }) {
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
            data={orders}
            columns={columns}
        />
    );
}

OrderList.propTypes = {
    orders: PropTypes.array.isRequired
};

export default OrderList;
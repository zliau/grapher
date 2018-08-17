import React, { Component } from "react";
import ReactTable from "react-table";
import PropTypes from "prop-types";
import "react-table/react-table.css";

function StockTable(props, { store }) {
    const state = store.getState();
    const tableData = state.orders;
    const columns = [
        "order",
        "order",
        "order",
        "order",
        "order"
    ];

    console.log(tableData);

    return (
        <ReactTable
            data={tableData}
            columns={columns}
        />
    );
}

StockTable.contextTypes = {
    store: PropTypes.object
};

export default StockTable;
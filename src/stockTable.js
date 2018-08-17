import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class StockTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    buyPrice: "1",
                    sellPrice: "2"
                }
            ],
            columns: [
                { Header: "Buy Price", accessor: "buyPrice" },
                { Header: "Sell Price", accessor: "sellPrice" }
            ]
        };
    }

    render() {
        return (
          <ReactTable
              data={this.state.data}
              columns={this.state.columns}
            />
        );
    }
}

export default StockTable;
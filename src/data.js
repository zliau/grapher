import React, { Component } from 'react';
import StockTable from './stockTable.js';
import './data.css';

class Data extends Component {
    onClick() {
        // slide out the add row
        // or show a modal?
    }

    render() {
        return (
            <div>
                <StockTable/>
            </div>
        );
    }
}

export default Data;
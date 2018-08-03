import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './data.css';

class Data extends Component {
    onClick() {
        // slide out the add row
        // or show a modal?
    }

    render() {
        return (
            <div>
                <AddButton/>
                <div>
                    Here is a table
                </div>
            </div>
        );
    }
}

function AddButton(props) {
    return (
        <Button bsStyle="primary" onClick={props.onClick}>
            {props.value}
        </Button>
    )
}

export default Data;
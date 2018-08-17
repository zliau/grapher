import React, { Component } from "react";
import PropTypes from "prop-types";
import { Drawer } from "@material-ui/core";

class AddOrderDrawer extends Component {
    render () {
        const { classes, open } = this.props;

        return (
            <div>
                <Drawer anchor="right" open={open}>
                    <input type="text" />
                </Drawer>
            </div>
        )
    }
}

AddOrderDrawer.contextTypes = {
    store: PropTypes.object.isRequired
};

AddOrderDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired
};
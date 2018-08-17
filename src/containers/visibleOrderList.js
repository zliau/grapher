import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";

import OrderList from "../components/orderList";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        "margin-right": "30px",
        float: "right"
    }
});

const VisibleOrderList = ({ classes, orders }) => (
    <div>
        <OrderList orders={orders} />
        <Button variant="fab" color="primary" className={classes.button}>
            <AddIcon />
        </Button>
    </div>
);

VisibleOrderList.propTypes = {
    classes: PropTypes.object.isRequired,
    orders: PropTypes.object.isRequired
};
VisibleOrderList.contextTypes = {
    store: PropTypes.object.isRequired
};

export default withStyles(styles)(VisibleOrderList);
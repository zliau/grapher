import React from "react";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import Tabs from "./tabs";
import OrderList from "./containers/visibleOrderList";
import AddOrder from "./containers/visibleAddOrder";
import "typeface-roboto";
import "./App.css";

const styles = theme => ({
    card: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 2
    },
    typography: {
    },
    button: {
        margin: theme.spacing.unit,
        "margin-right": "30px",
        float: "right"
    }
});

function App(props) {
    const { classes } = props;
    return (
        <div className="App">
            <header>
                <Tabs
                    title="Table"
                />
            </header>

            <Card className={classes.card}>
                <AddOrder />
            </Card>
            <Card className={classes.card}>
                <OrderList />
            </Card>
        </div>
    );
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};


export default withStyles(styles)(App);
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const styles = theme => ({
    text: {
        marginRight: theme.spacing.unit
    },
    button: {
        margin: theme.spacing.unit,
        "margin-right": "30px",
        float: "right"
    }
});

class AddOrderForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            order: {
                sym: "",
                qty: "",
                price: "",
                com: "",
                act: "",
                time: ""
            },
            enableAdd: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { order } = this.state;
        order[e.target.id] = e.target.value;

        // Enable add button if all fields are filled
        let enableAdd = true;
        Object.values(order).forEach((key) => {
            if (key === "") {
                enableAdd = false;
            }
        });

        this.setState({
            order: order,
            enableAdd: enableAdd
        });
    }

    handleSubmit(e) {
        const { onAddOrderClick } = this.props;
        const order = {};
        onAddOrderClick(order);
        e.preventDefault();
    }

    render() {
        const { classes } = this.props;

        const { enableAdd } = this.state;
        return (
            <div>
                <TextField id="sym" required className={classes.text} onChange={this.handleChange} label="Symbol" />
                <TextField id="qty" required className={classes.text} onChange={this.handleChange} label="Quantity" />
                <TextField id="price" required className={classes.text} onChange={this.handleChange} label="Price" />
                <TextField id="com" required className={classes.text} onChange={this.handleChange} label="Commission" />
                <TextField id="act" required className={classes.text} onChange={this.handleChange} label="Action" />
                <TextField id="time" required className={classes.text} onChange={this.handleChange} label="Time" />

                <Button type="submit" variant="contained" className={classes.button} color="primary" disabled={!enableAdd}>
                    Add Order
                </Button>
            </div>
        );
    };
};

AddOrderForm.propTypes = {
    classes: PropTypes.object.isRequired,
    onAddOrderClick: PropTypes.func.isRequired
};

export default withStyles(styles)(AddOrderForm);
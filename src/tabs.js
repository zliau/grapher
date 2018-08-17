import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './tabs.css';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function Tabs(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit">
                        <MenuIcon/>
                    </IconButton>

                    <Typography variant="title" color="inherit" className={classes.flex}>
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Tabs.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
};

export default withStyles(styles)(Tabs);
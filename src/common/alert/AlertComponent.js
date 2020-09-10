import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const AlertComponent = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert severity={props.severity}>
                <AlertTitle>{props.title}</AlertTitle>
                {props.content}
            </Alert>
        </div>
    );
}

AlertComponent.propTypes = {
    content: PropTypes.string,
    severity: PropTypes.string,
    title: PropTypes.string,
}

export default AlertComponent;
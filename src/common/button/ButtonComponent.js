import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    buttonDefault: {
        backgroundColor: "transparent",
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        border: "1px solid",
        marginTop: "10px",
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary,
        }
    },
    link: {
        textDecoration: "none",
        color: theme.palette.primary.main,
        "&:hover": {
            color: theme.palette.text.primary,
        }
    }
  }));

const ButtonComponent = (props) => {
    const classes = useStyles();

    return (
        <Button className={classes.buttonDefault}>
            <Link to={props.href} className={classes.link}>{props.name}</Link>
        </Button>
    );
}

ButtonComponent.propTypes = {
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default ButtonComponent;
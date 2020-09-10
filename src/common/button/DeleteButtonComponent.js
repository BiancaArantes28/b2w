import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
});

class DeleteButtonComponent extends Component {

    handleClick(e, id) {
        e.preventDefault();
        this.props.actionClick(id);
    }
    render() {
        const { classes, id } = this.props;

        return (
            <IconButton aria-label="delete" className={classes.margin} onClick={(e) => this.handleClick(e, id)}>
                <DeleteIcon fontSize="small" />
            </IconButton>
        );
    }
}

DeleteButtonComponent.propTypes = {
    actionClick: PropTypes.func.isRequired,
    id: PropTypes.number,
}

export default withStyles(styles, { withTheme: true })(DeleteButtonComponent);
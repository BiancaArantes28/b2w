import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const styles = theme => ({
    root: {
        '& > * + *': {
            marginTop: 30,
            width: '100%',
            textAlign: 'center'
        },
    },
});

class PaginationComponent extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, value) {
        this.props.changePage(value);
    }

    render() {
        const { classes, page, total } = this.props;

        return (
            <div className={classes.root}>
                <Pagination count={total} page={page} onChange={this.handleChange} />
            </div>
        );
    }
}

PaginationComponent.propTypes = {
    page: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired,
}

export default withStyles(styles, { withTheme: true })(PaginationComponent);
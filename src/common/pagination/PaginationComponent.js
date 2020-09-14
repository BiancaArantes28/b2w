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
        let windowWidth = window.innerWidth;

        return (
            <div className={classes.root}>
                <Pagination color="secondary" count={total} page={page} onChange={this.handleChange} size={windowWidth < 960 ? 'small' : 'large'} />
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
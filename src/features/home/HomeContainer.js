import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HomePage from './HomePage';

import { fetchHelloWorld } from '../../store/actions/helloWorldActions/helloWorldActions';
import { getHelloWorld, getStatusHelloWorld } from '../../store/selectors/helloWorldSelectors/helloWorldSelectors';


class HomeContainer extends Component {

    componentDidMount() {
        this.props.fetchHelloWorld();
    }

    render() {
        return (
            <HomePage
                text={this.props.text}
                status={this.props.status}
            />
        );
    }
}

HomeContainer.propTypes = {
    fetchHelloWorld: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    text: getHelloWorld(state),
    status: getStatusHelloWorld(state),
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHelloWorld: () => dispatch(fetchHelloWorld()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
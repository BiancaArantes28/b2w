import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HomePage from './HomePage';

import { searchMovies } from '../../store/actions/searchMovies/searchMoviesActions';
import { getMoviesStatus, getMoviesResult, getMoviesTotalResults, getMoviePage } from '../../store/selectors/searchMoviesSelectors/searchMoviesSelectors';


class HomeContainer extends Component {

    render() {
        const { movies, page, status, totalResults } = this.props;
        return (
            <HomePage
                movies={movies}
                status={status}
                page={page}
                searchMovies={this.props.searchMovies}
                totalResults={totalResults}
            />
        );
    }
}

HomeContainer.propTypes = {
    searchMovies: PropTypes.func.isRequired,
    movies: PropTypes.array,
    page: PropTypes.number,
    totalResults: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    status: getMoviesStatus(state),
    movies: getMoviesResult(state),
    page: getMoviePage(state),
    totalResults: getMoviesTotalResults(state),
});

const mapDispatchToProps = (dispatch) => {
    return {
        searchMovies: (payload) => dispatch(searchMovies(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
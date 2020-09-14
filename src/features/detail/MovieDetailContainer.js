import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieDetailPage from './MovieDetailPage';
import { detailMovie } from '../../store/actions/searchMovies/detailMovieActions';
import { getMovieInfo, getStatusMovieDetail } from '../../store/selectors/searchMoviesSelectors/detailMovieSelectors';
import { STATUS } from '../../const/status';

class MovieDetailContainer extends Component {

    componentDidMount() {
        const { imdbID } = this.props.match.params;

        this.props.detailMovie(imdbID);
    }

    render() {
        const { movie } = this.props;

        return (
            <MovieDetailPage movie={movie} />
        );
    }
}

MovieDetailContainer.propTypes = {
    detailMovie: PropTypes.func.isRequired,
    movie: PropTypes.object.isRequired,
    status: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
    movie: getMovieInfo(state),
    status: getStatusMovieDetail(state),
});

const mapDispatchToProps = (dispatch) => {
    return {
        detailMovie: (payload) => dispatch(detailMovie(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailContainer);

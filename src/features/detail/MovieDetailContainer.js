import React, { Component } from 'react';
import MovieDetailPage from './MovieDetailPage';

class MovieDetailContainer extends Component {
    render() {
        const { imdbID } = this.props.match.params;
        
        return (
            <MovieDetailPage />
        );
    }
}

export default MovieDetailContainer;

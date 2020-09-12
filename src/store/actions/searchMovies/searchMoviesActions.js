export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const SEARCH_MOVIES_SUCCESSFUL = 'SEARCH_MOVIES_SUCCESSFUL';
export const SEARCH_MOVIES_FAILED = 'SEARCH_MOVIES_FAILED';

export const searchMovies = (payload) => ({
    type: SEARCH_MOVIES,
    payload
});

export const searchMoviesSuccessful = (payload) => ({
    type: SEARCH_MOVIES_SUCCESSFUL,
    payload
});

export const searchMoviesFailed = (error) => ({
    type: SEARCH_MOVIES_FAILED,
    payload: error
});

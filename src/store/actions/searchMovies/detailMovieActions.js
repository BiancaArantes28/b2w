export const DETAIL_MOVIE = 'DETAIL_MOVIE';
export const DETAIL_MOVIE_SUCCESSFUL = 'DETAIL_MOVIE_SUCCESSFUL';
export const DETAIL_MOVIE_FAILED = 'DETAIL_MOVIE_FAILED';

export const detailMovie = (payload) => ({
    type: DETAIL_MOVIE,
    payload
});

export const detailMovieSuccessful = (payload) => ({
    type: DETAIL_MOVIE_SUCCESSFUL,
    payload
});

export const detailMovieFailed = (error) => ({
    type: DETAIL_MOVIE_FAILED,
    payload: error
});

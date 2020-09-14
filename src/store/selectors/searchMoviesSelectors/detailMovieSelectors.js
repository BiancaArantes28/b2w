export const getDetailMovie = (state) => state.movies.detail;
export const getMovieInfo = (state) => getDetailMovie(state).movie;
export const getStatusMovieDetail = (state) => getDetailMovie(state).status;
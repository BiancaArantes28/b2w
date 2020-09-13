export const getMovies = (state) => state.movies.result;
export const getMoviesStatus = (state) => getMovies(state).status;
export const getMoviesResult = (state) => getMovies(state).movies;
export const getMoviesTotalResults = (state) => getMovies(state).totalResults;
export const getMoviePage = (state) => getMovies(state).page;
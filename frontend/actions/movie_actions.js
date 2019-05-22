import * as MovieAPIUtil from '../util/movie_api_util';

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";

export const receiveMovies = (movies) => {
    return ({
        type: RECEIVE_MOVIES,
        movies
    });
};

export const receiveMovie = ({ movie }) => {
    return ({
        type: RECEIVE_MOVIE,
        movie
    });
};

export const removeMovie = (movieId) => {
    return ({
        type: REMOVE_MOVIE,
         movieId
    });
};


export const fetchMovies = () => dispatch => {
    return (
        MovieAPIUtil.fetchMovies().then((movies) => dispatch(receiveMovies(movies)))
    );
};

export const fetchMovie = (id) => dispatch => {
    return (
        MovieAPIUtil.fetchMovie(id).then((movie) => dispatch(receiveMovie(movie)))
    );
};


export const createMovie = (movie) => dispatch => {
    return (
        MovieAPIUtil.createMovie(movie).then((movie) => dispatch(receiveMovie(movie)))
    );
};

export const updateMovie= (movie) => dispatch => {
    return (
        MovieAPIUtil.updateMovie(movie).then((movie) => dispatch(receiveMovie(movie)))
    );
};

export const deleteMovie = movieId => dispatch => {
    return (
        MovieAPIUtil.deleteMovie(movieId).then(() => dispatch(removeMovie(movieId)))
    );
};
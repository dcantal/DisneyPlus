import { connect } from 'react-redux';
import MoviesIndex from './movies_index';
import { fetchMovies, fetchMovie } from '../../../actions/movie_actions';

const mapStateToProps = (state, ownProps) => {
    let movies = Object.values(state.entities.movies);
    return {
        movies: movies,
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchMovies: () => dispatch(fetchMovies()),
        // deleteMovie: (movieId) => dispatch(deleteMovie(movieId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesIndex);
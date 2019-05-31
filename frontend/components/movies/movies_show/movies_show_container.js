import { connect } from 'react-redux';
import MoviesShow from './movies_show';
import { fetchMovie } from '../../../actions/movie_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.id,
        movie: state.entities.movies[ownProps.match.params.movieId],
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchMovie: id => dispatch(fetchMovie(id)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesShow);
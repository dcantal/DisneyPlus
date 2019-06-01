import React from 'react';
import MoviesIndexItem from './movies_index_item';


class MoviesIndex extends React.Component {

    componentDidMount() {
        this.props.fetchMovies();
        debugger
    }

    render() {
        let movies;
        debugger
        if (!this.props.movies) {
            return <div className="loading-icon"><img src="https://loading.io/spinners/spinner/index.ajax-spinner-preloader.svg"></img></div>;
        }
        debugger
        movies = this.props.movies.map((movie) =>  {
            return (
                <MoviesIndexItem key={movie.id} movie={movie} />
            );
        });
        return (
            <div className="studio-list">
                <div className="browse-section-stripe">
                    <h1 className="browse-section-label">MOVIES ></h1>
                </div>
                <div className="studio-grid">
                    {movies}
                </div>
            </div>
        );
    }
}

export default MoviesIndex;
import React from 'react';
import NavBarContainer from '../../navbar/navbar_container';


class MoviesShow extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchMovie(this.props.match.params.movieId);
    }

    render() {
        if (!this.props.movie) {
            return <div className="loading-icon"><img src="https://loading.io/spinners/spinner/index.ajax-spinner-preloader.svg"></img></div>;
        }
        return (
            <div>
                <NavBarContainer/>
                <div className="movie-show-page">
                    <div className="movie-show-banner-container">
                        <div className="movie-show-banner" style={{backgroundImage: `url(${this.props.movie.bannerUrl})`}}>
                            <div className="movie-show-banner-content">
                                <div className="movie-show-poster-image">
                                    <img className="movie-poster-image" src={this.props.movie.posterUrl}></img>
                                </div>
                                <div className="movie-show-banner-details">
                                    <h1 className="movie-title">{this.props.movie.title}</h1>
                                    <div className="movie-show-banner-small-details">
                                        <h3>{this.props.movie.rating}</h3>
                                        <h3>&nbsp;·&nbsp;</h3>
                                        <h3>{this.props.movie.year}</h3>
                                    </div>
                                    <h3 className="movie-description">{this.props.movie.description}</h3>
                                    <div className="movie-show-actions-strip">
                                        <h3>WATCH MOVIE</h3>
                                        <h3>+</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default MoviesShow;
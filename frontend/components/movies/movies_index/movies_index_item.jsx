import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import React from 'react';
import { Link } from 'react-router-dom';

const MoviesIndexItem = props => {
    return (
        <Link to={`/movies/${props.movie.id}`} className="studio-button-link">
            <div className="studio-button">
                <img src={props.movie.bannerUrl}></img>
            </div>
        </Link>

//working video player

        // <Video
        //     controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
        //     poster={props.movie.bannerUrl}
        //     onCanPlayThrough={() => {
        //         // Do stuff
        //     }}>
        //     <source src={props.movie.videoUrl} type="video/webm" />
        // </Video>
    )
}

export default MoviesIndexItem;
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import React from 'react';
import { Link } from 'react-router-dom';

const MoviesIndexItem = props => {
    return (
        <div className="browse-content-item">
            <Link to={`/movies/${props.movie.id}`} className="studio-button-link">
                <div className="studio-button" style={{ backgroundImage: `url(${props.movie.bannerUrl})` }}>
                    {/* <img src={props.movie.bannerUrl}></img> */}
                </div>
            </Link>
            <Link to={`/movies/${props.movie.id}`}>
                <h1 className="browse-content-title">{props.movie.title}</h1>
            </Link> 
        </div>


//working video player code below

    //     <Video
    //         controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
    //         poster={props.movie.bannerUrl}
    //         onCanPlayThrough={() => {
    //             // Do stuff
    //         }}>
    //         <source src={props.movie.videoUrl} type="video/webm" />
    //     </Video>
    )
}

export default MoviesIndexItem;
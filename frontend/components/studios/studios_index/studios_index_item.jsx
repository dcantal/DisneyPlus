import React from 'react';
import { Link } from 'react-router-dom';

const StudiosIndexItem = props => {
    return (
        <div className="studio-button">
            <img src={props.studio.photoUrl}></img>
        </div>
        // <div className="studio-button" style={{backgroundImage: `url(${props.studio.photoUrl})`}}>
        //     <h1>{props.studio.title}</h1>
        //     <h1>{props.studio.photoUrl}</h1>
        // </div>
    )
}

export default StudiosIndexItem;
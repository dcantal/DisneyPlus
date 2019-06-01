import React from 'react';
import { Link } from 'react-router-dom';

const StudiosIndexItem = props => {
    return (
        <Link to={`/studios/${props.studio.id}`} className="studio-button-link">
            <div className="studio-button" style={{ backgroundImage: `url(${props.studio.photoUrl})` }}>
                {/* <img src={props.studio.photoUrl}></img> */}
            </div>
        </Link>
    )
}

export default StudiosIndexItem;
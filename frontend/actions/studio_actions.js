import * as StudioAPIUtil from '../util/studio_api_util';

export const RECEIVE_STUDIOS = "RECEIVE_STUDIOS";
export const RECEIVE_STUDIO = "RECEIVE_STUDIO";
export const REMOVE_STUDIO = "REMOVE_STUDIO";

export const receiveSudios = (studios) => {
    debugger
    return ({
        type: RECEIVE_STUDIOS,
        studios
    });
};

export const receiveStudio = ({ studio }) => {
    return ({
        type: RECEIVE_STUDIO,
        studio
    });
};

export const removeStudio = (studioId) => {
    return ({
        type: REMOVE_STUDIO,
        studioId
    });
};


export const fetchStudios = () => dispatch => {
    debugger
    return (
        StudioAPIUtil.fetchStudios().then((studios) => {
            debugger
            return (
                dispatch(receiveStudios(studios))
            );
        }
        ));
};

export const fetchStudio = (id) => dispatch => {
    return (
        StudioAPIUtil.fetchStudio(id).then((studio) => dispatch(receiveStudio(studio)))
    );
};


export const createStudio = (studio) => dispatch => {
    return (
        StudioAPIUtil.createStudio(studio).then((studio) => dispatch(receiveStudio(studio)))
    );
};

export const updateStudio = (studio) => dispatch => {
    return (
        StudioAPIUtil.updateStudio(studio).then((studio) => dispatch(receiveStudio(studio)))
    );
};

export const deleteStudio = studioId => dispatch => {
    return (
        StudioAPIUtil.deleteStudio(studioId).then(() => dispatch(removeStudio(studioId)))
    );
};
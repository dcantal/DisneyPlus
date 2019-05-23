import { connect } from 'react-redux';
import StudiosIndex from './studios_index';
import { fetchStudios, fetchStudio } from '../../../actions/studio_actions';

const mapStateToProps = (state, ownProps) => {
    let studios = Object.values(state.entities.studios);
    return {
        studios: studios,
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchStudios: () => dispatch(fetchStudios()),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(StudiosIndex);
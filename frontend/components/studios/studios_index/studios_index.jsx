import React from 'react';
import StudiosIndexItem from './studios_index_item';


class StudiosIndex extends React.Component {

    componentDidMount() {
        this.props.fetchStudios();
        debugger
    }

    render() {
        let studios;
        debugger
        if (!this.props.studios) {
            return <div className="loading-icon"><img src="https://loading.io/spinners/spinner/index.ajax-spinner-preloader.svg"></img></div>;
        }
        debugger
        studios = this.props.studios.map((studio) => {
            return (
                <StudiosIndexItem key={studio.id} studio={studio} />
            );
        });
        return (
            <div className="studio-list">
                <div className="browse-section-stripe">
                    <h1 className="browse-section-label">STUDIOS ></h1>
                </div>
                <div className="studio-grid">
                    {studios}
                </div>
            </div>
        );
    }
}

export default StudiosIndex;
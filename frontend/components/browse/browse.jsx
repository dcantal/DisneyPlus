import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

class Browse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <NavbarContainer/>
                <div className="browse-page">
                    <h1>Test1</h1>
                    <h1>Test2</h1>
                    <h1>Test3</h1>
                    <h1>Test4</h1>
                    <h1>Test5</h1>
                    <h1>Test6</h1>
                </div>
            </div>
        );
    }
}

export default Browse;
import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }


    showMenu(event) {
        event.preventDefault();

        this.setState({
            showMenu: true,
        }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });

    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar-left">
                    <img id="logo-navbar" src="https://s3.amazonaws.com/disneyplus-dc-seeds/disney_plus_logo.png" />
                    <h1 className="navbar-link">BROWSE</h1>
                </div>
                <div className="navbar-right">
                    <h1 className="navbar-link">SEARCH</h1>
                    <h1 className="navbar-link">DANTE</h1>
                </div>
            </div>
        )

    }

}



export default NavBar;
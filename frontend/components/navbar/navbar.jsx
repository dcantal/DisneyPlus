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
                    <Link to="/browse"><img id="logo-navbar" src="https://s3.amazonaws.com/disneyplus-dc-seeds/disney_plus_logo.png" /></Link>
                    <Link to="/browse" className="navbar-link"><h1 >BROWSE</h1></Link>
                </div>
                <div className="navbar-right">
                    <Link to="/browse" className="navbar-link"><h1 >SEARCH</h1></Link>
                    <Link to="/browse" className="navbar-link"><h1 >DANTE</h1></Link>
                </div>
            </div>
        )

    }

}



export default NavBar;
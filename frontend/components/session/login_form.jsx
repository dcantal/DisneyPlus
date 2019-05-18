import React from 'react';
import { Link } from 'react-router-dom';
// import Typed from 'typed.js';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.demoLogin = this.demoLogin.bind(this);
        this.navigateToFind = this.navigateToFind.bind(this);
    }

    navigateToFind() {
        this.props.history.push('/browse');
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.navigateToFind();
    }

    // demoLogin(e) {
    //     e.preventDefault();
    //     new Typed("#login-input-email", {
    //         strings: ['danteacantal@gmail.com'],
    //         typeSpeed: 40,
    //         loop: false,
    //     });
    //     setTimeout(() => {
    //         new Typed("#login-input-pass",
    //             {
    //                 strings: ['testtest'],
    //                 typeSpeed: 40,
    //                 loop: false,
    //             });
    //     }, 1500);
    //     setTimeout(() => { this.props.processForm({ email: "danteacantal@gmail.com", password: "testtest" }); }, 3000);
    // }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    renderErrors() {
        if (this.props.errors.length > 0) {
            return (
                <div className="error-stripe">
                    <div className="error-box">
                        <h1 className="error-text">Your email or password was entered incorrectly.</h1>
                        <p className="error-caption"> Please try again or <Link to="/register">Sign up</Link></p>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <>
                {this.renderErrors()}
                <div className="standard-page-stripe">
                    <div className="login-form-container">
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            <div className="login-form">
                                <br />
                                <label>Email address:
                                <br />
                                    <input type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        className="login-input"
                                        id="login-input-email"
                                    />
                                </label>
                                <br />
                                <br />
                                <label>Password:
                                <br />
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="login-input"
                                        id="login-input-pass"
                                    />
                                </label>
                                <br />
                                <br />
                                <br />
                                <input className="session-submit" type="submit" value={this.props.formType} />
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default LoginForm;
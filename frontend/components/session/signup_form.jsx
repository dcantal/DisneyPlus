import React from 'react';
// import Typed from 'typed.js';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.demoLogin = this.demoLogin.bind(this);
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
    }

    // demoLogin(e) {
    //     e.preventDefault();
    //     new Typed("#signup-input-name", {
    //         strings: ['Dante Cantal'],
    //         typeSpeed: 40,
    //         loop: false,
    //     });
    //     setTimeout(() => {
    //         new Typed("#signup-input-email",
    //             {
    //                 strings: ['danteacantal@gmail.com'],
    //                 typeSpeed: 40,
    //                 loop: false,
    //             });
    //     }, 1100);
    //     setTimeout(() => {
    //         new Typed("#signup-input-pass",
    //             {
    //                 strings: ['testtest'],
    //                 typeSpeed: 40,
    //                 loop: false,
    //             });
    //     }, 2600);
    //     setTimeout(() => { this.props.demoLogin({ email: "danteacantal@gmail.com", password: "testtest" }); }, 3300);
    // }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    renderErrors() {
        if (this.props.errors.length > 0) {
            return (
                <div className="error-stripe">
                    <div className="error-box">
                        {/* <h1 className="error-text">Your email or password was entered incorrectly.</h1>
                        <p className="error-caption"> Please try again or {this.props.navLink}</p> */}
                        <ul>
                            {this.props.errors.map((error, i) => (
                                <li key={`error-${i}`} className="error-text">
                                    {error}
                                </li>
                            ))}
                        </ul>
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
                    <img id="logo" src="https://s3.amazonaws.com/disneyplus-dc-seeds/disney_plus_logo.png" />
                    
                    <div className="signup-form-container">
                        <div className="signup-form-title">
                            <h1>Sign up</h1>
                        </div>
                        <form onSubmit={this.handleSubmit} className="signup-form-box">
                            <div className="signup-form">
                                <br />
                                <label>Your name
                                <br />
                                    <input type="text"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                        className="login-input"
                                        id="signup-input-name"
                                    />
                                </label>
                                <br />
                                <br />
                                <label>Email address
                                <br />
                                    <input type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        className="login-input"
                                        id="signup-input-email"
                                    />
                                </label>
                                <br />
                                <br />
                                <label>Password
                                <br />
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="login-input"
                                        id="signup-input-pass"
                                    />
                                </label>
                                <br />
                                <input className="session-submit-signup" type="submit" value={this.props.formType} />

                            </div>
                        </form>
                        <div className="signup-form-footer">
                            Already a member? {this.props.navLink}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SignupForm;
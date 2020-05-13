import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        signUpStart({ displayName, email, password });
    };

    render() {
        return (
            <div className='sign-up'>
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="name"
                        name="displayName"
                        value={this.state.displayName}
                        label="Display Name"
                        required
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        label="Email"
                        required
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        label="Password"
                        required
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        label="Confirm Password"
                        required
                        handleChange={this.handleChange}
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign Up</CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
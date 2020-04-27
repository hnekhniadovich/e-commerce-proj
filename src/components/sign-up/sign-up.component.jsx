import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

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

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.error(error);
        }
    }

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

export default SignUp;
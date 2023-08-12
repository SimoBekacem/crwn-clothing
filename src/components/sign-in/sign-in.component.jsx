import React, { Component } from 'react';

import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
    
        const { email, password } = this.state;
    
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };
    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]:event.target.value
        })
        console.log(this.state)
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your eamil and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email" 
                        name="email" 
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        label={"email"}
                        required 
                    />

                    <FormInput
                        type="password" 
                        name="password" 
                        value={this.state.password}
                        handleChange={this.handleChange} 
                        label={"password"}
                        required 
                    />
                    <div className="buttons">
                        <CustomButton>
                            Sign In
                        </CustomButton>
                        <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn ;
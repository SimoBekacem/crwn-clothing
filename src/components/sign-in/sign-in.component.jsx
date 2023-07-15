import React, { Component } from 'react';

import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }
    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            email : '',
            password : ''
        })
    }
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
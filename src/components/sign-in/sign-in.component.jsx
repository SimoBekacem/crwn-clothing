import React, { useEffect, useState } from 'react';

import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
	const [email, setemail] = useState('');
	const [password, setpassword] = useState('');
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await auth.signInWithEmailAndPassword(email, password);
			setemail('');
			setpassword('');
		} catch (error) {
			console.log(error);
		}
	};
	const handleChange = (event) => {
		event.target.name === 'email'
			? setemail(event.target.value)
			: setpassword(event.target.value);
	};
	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your eamil and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					name="email"
					value={email}
					handleChange={handleChange}
					label={'email'}
					required
				/>

				<FormInput
					type="password"
					name="password"
					value={password}
					handleChange={handleChange}
					label={'password'}
					required
				/>
				<div className="buttons">
					<CustomButton>Sign In</CustomButton>
					<CustomButton
						isGoogleSignIn={true}
						onClick={signInWithGoogle}
					>
						Sign In with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};
export default SignIn;

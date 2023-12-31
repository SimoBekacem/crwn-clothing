import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.style.scss';

const SignUp = () => {
	const [state, setstate] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const { displayName, email, password, confirmPassword } = state;
	const handleSubmit = async (event) => {
		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password,
			);

			await createUserProfileDocument(user, { displayName });

			setstate({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (event) => {
		setstate({
			...state,
			[event.target.name]: event.target.value,
		});
	};
	return (
		<div className="sign-up">
			<h2 className="title">I do not have a account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					handleChange={handleChange}
					label="Display Name"
					required
				/>
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
					label="Password"
					required
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					handleChange={handleChange}
					label="Confirm Password"
					required
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;

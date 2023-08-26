import React, { Component } from 'react';

import './error-boundary-style.scss';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasErrored: false,
		};
	}
	static getDerivedStateFromError(error) {
		// todo: this you can handle the error or not but alwase return the opposite of the state.
		return this.setState({
			hasErrored: true,
		});
	}
	componentDidCatch(error, info) {
		console.log(
			'🚀 ~ file: error-boundary-component.jsx:19 ~ ErrorBoundary ~ componentDidCatch ~ error:',
			error,
		);
	}
	render() {
		if (this.state.hasErrored) {
			return (
				<div className="ErrorImageOverlay">
					<div className="ErrorImageContainer"></div>
					<h1 className="ErrorImageText">
						Sorry this page is broken
					</h1>
				</div>
			);
		} else {
			return this.props.children;
		}
	}
}
export default ErrorBoundary;

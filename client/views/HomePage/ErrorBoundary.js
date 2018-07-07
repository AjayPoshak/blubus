import PropTypes from 'prop-types';
import React, { Component } from 'react';
import logErrorToService from '../../utils/helpers';
import { ErrorWrapper, ErrorImg, ErrorMsg, GoToHome } from './style';

export default class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true });
		logErrorToService(error, info);
	}

	goHome() {
		window.location.href = '/';
	}

	render() {
		if (this.state.hasError) {
			return (
				<ErrorWrapper>
					<header>
						<ErrorImg
							alt="somthing not right"
							src="https://res.cloudinary.com/ddbxa4afa/image/upload/v1530339474/blubus/industrial-robot.svg"
						/>
					</header>
					<ErrorMsg>
						<p>Hey Traveller</p>
						<p>Oh Look like something is not right !!!</p>
						<p>But don&#39;t worry our smart ass engineers are on it.</p>
					</ErrorMsg>
					<GoToHome onClick={this.goHome}>Go to Home</GoToHome>
				</ErrorWrapper>
			);
		}
		return this.props.children;
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.element.isRequired
};

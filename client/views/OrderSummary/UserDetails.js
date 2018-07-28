import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import { EMAIL_ERROR, MOBILE_ERROR, NAME_ERROR, AGE_ERROR } from './constants';
import { ButtonWrapper, ContactInfo, PassengerInfo, InfoHeader } from './style';
import { emailPattern, mobilePattern, numberPattern, excludeSpecialChars } from '../../utils/constants';

class UserDetails extends Component {
	constructor() {
		super();
		this.handleAge = this.handleAge.bind(this);
		this.handleName = this.handleName.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handleMobile = this.handleMobile.bind(this);
		this.confirmDetails = this.confirmDetails.bind(this);
		this.state = {
			age: '',
			name: '',
			email: '',
			mobile: '',
			showAgeError: false,
			showNameError: false,
			showEmailError: false,
			showMobileError: false
		};
	}

	validateInputAgainstPattern(pattern, value) {
		const regExPattern = new RegExp(pattern);
		return regExPattern.test(value);
	}

	isEmpty(value) {
		return value.length === 0;
	}

	handleEmail(value) {
		this.setState({ email: value });
		const isValidPattern = this.validateInputAgainstPattern(emailPattern, value);
		!isValidPattern && this.setState({ showEmailError: true });
		isValidPattern && this.setState({ showEmailError: false });
	}

	handleMobile(value) {
		this.setState({ mobile: value });
		const isValidPattern = this.validateInputAgainstPattern(mobilePattern, value);
		!isValidPattern && this.setState({ showMobileError: true });
		isValidPattern && this.setState({ showMobileError: false });
	}

	handleName(value) {
		this.setState({ name: value });
		if (value && value.length > 0) {
			const isValidPattern = this.validateInputAgainstPattern(excludeSpecialChars, value);
			!isValidPattern && this.setState({ showNameError: true });
			isValidPattern && this.setState({ showNameError: false });
		} else {
			this.setState({ showNameError: true });
		}
	}

	handleAge(value) {
		this.setState({ age: value });
		const isValidPattern = this.validateInputAgainstPattern(numberPattern, value);
		!isValidPattern && this.setState({ showAgeError: true });
		isValidPattern && this.setState({ showAgeError: false });
	}

	confirmDetails() {
		// const emailValidity = this.isValid(emailPattern, this.state.email);
		this.handleMobile(this.state.mobile);
		this.handleAge(this.state.age);
		this.handleName(this.state.name);
		// const { showMobileError, showEmailError, showNameError, showAgeError } = this.state;
		this.setState(prevState => {
			if (
				!prevState.showMobileError &&
				!prevState.showEmailError &&
				!prevState.showNameError &&
				!prevState.showAgeError
			) {
				// Update user details
				this.props.handleOrderSummary(true);
			}
			return {};
		});
	}

	render() {
		return (
			<Fragment>
				<InfoHeader>
					<h2>Contact Details</h2>
				</InfoHeader>
				<ContactInfo>
					<TextInput
						type="email"
						value={this.state.email}
						placeholder="Enter your email"
						handleChange={this.handleEmail}
						error={EMAIL_ERROR}
						showError={this.state.showEmailError}
						icon="https://res.cloudinary.com/ddbxa4afa/image/upload/v1528611235/blubus/email.svg"
					/>
					<TextInput
						type="tel"
						value={this.state.mobile}
						handleChange={this.handleMobile}
						placeholder="Enter your mobile"
						error={MOBILE_ERROR}
						showError={this.state.showMobileError}
						icon="https://res.cloudinary.com/ddbxa4afa/image/upload/v1528611234/blubus/mobile.svg"
					/>
				</ContactInfo>
				<InfoHeader>
					<h2>Passenger Details</h2>
				</InfoHeader>
				<PassengerInfo>
					<article>
						<TextInput
							type="text"
							value={this.state.name}
							placeholder="Enter your name"
							handleChange={this.handleName}
							error={NAME_ERROR}
							showError={this.state.showNameError}
							icon="https://res.cloudinary.com/ddbxa4afa/image/upload/v1528623999/blubus/user.svg"
						/>
						<TextInput
							type="number"
							value={this.state.age}
							placeholder="Enter your age"
							handleChange={this.handleAge}
							error={AGE_ERROR}
							showError={this.state.showAgeError}
							icon="https://res.cloudinary.com/ddbxa4afa/image/upload/v1528624264/blubus/info.svg"
						/>
					</article>
				</PassengerInfo>
				<ButtonWrapper>
					<Button appearance="primary" handleClick={this.confirmDetails}>
						Continue Booking
					</Button>
				</ButtonWrapper>
			</Fragment>
		);
	}
}

UserDetails.propTypes = {
	handleOrderSummary: PropTypes.func.isRequired
};

export default UserDetails;

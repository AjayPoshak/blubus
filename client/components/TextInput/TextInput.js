import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { InputWrapper, Input, Icon, ErrorWrapper, ErrorMsg } from './style';

class TextInput extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.handleChange(event.target.value);
	}

	render() {
		const { type, icon, showError, error } = this.props;
		return (
			<Fragment>
				<InputWrapper>
					<Input type={type} onChange={this.handleChange} {...this.props} value={this.props.value} />
					{icon && <Icon src={icon} alt={icon} />}
					{showError && (
						<ErrorWrapper id="error">
							<ErrorMsg>{error}</ErrorMsg>
						</ErrorWrapper>
					)}
				</InputWrapper>
			</Fragment>
		);
	}
}

TextInput.defaultProps = {
	icon: '',
	showError: false,
	error: ''
};

TextInput.propTypes = {
	icon: PropTypes.string,
	error: PropTypes.string,
	showError: PropTypes.bool,
	handleChange: PropTypes.func.isRequired,
	type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel']).isRequired
};
export default TextInput;

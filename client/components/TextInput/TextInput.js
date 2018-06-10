import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { InputWrapper, Input, Icon } from './style';

class TextInput extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.handleChange(event.target.value);
	}

	render() {
		const { type, icon } = this.props;
		return (
			<Fragment>
				<InputWrapper>
					<Input type={type} onChange={this.handleChange} {...this.props} value={this.props.value} />
					{icon && <Icon src={icon} alt={icon} />}
				</InputWrapper>
			</Fragment>
		);
	}
}

TextInput.defaultProps = {
	icon: ''
};

TextInput.propTypes = {
	type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel']).isRequired,
	handleChange: PropTypes.func.isRequired,
	icon: PropTypes.string
};
export default TextInput;

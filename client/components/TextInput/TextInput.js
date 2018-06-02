import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { InputWrapper, Input, Icon } from './style';

const TextInput = (props) => {
	const {
		type, handleChange, icon,
	} = props;
	return (
		<Fragment>
			<InputWrapper>
				<Input type={type} onChange={handleChange} {...props} />
				{icon && <Icon src={icon} alt={icon} />}
			</InputWrapper>
		</Fragment>
	);
};

TextInput.defaultProps = {
	icon: '',
};

TextInput.propTypes = {
	type: PropTypes.oneOf(['text', 'password']).isRequired,
	handleChange: PropTypes.func.isRequired,
	icon: PropTypes.string,
};
export default TextInput;


import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { colors, misc, fonts } from '../Tokens';

const appearances = {
	primary: {
		color: colors.button.primary.text,
		background: colors.button.primary.background,
	},
	default: {
		color: colors.button.default.text,
		background: colors.button.default.background,
	},
};

function getAttribute(appearance) {
	const appearanceStyles = appearance || 'default';
	return appearances[appearanceStyles];
}

const ButtonStyle = styled.button`
	border: none;
	height: ${misc.input.height};
	width: ${misc.input.width};
	font-size: ${fonts.button.fontSize};
	font-weight: ${fonts.button.fontWeight};
	color: ${props => getAttribute(props.appearance).color};
	background: ${props => getAttribute(props.appearance).background};
`;

const Button = props => (
	<ButtonStyle onClick={props.handleClick} appearance={props.appearance}>{props.children}</ButtonStyle>
);

Button.defaultProps = {
	children: 'Okay',
	appearance: 'default',
};

Button.propTypes = {
	children: PropTypes.node,
	handleClick: PropTypes.func.isRequired,
	appearance: PropTypes.oneOf(['primary', 'default']),
};

export default Button;


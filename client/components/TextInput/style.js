import styled from 'styled-components';
import { colors, fonts, misc } from '../Tokens';

export const Input = styled.input`
	outline: none;
	padding-left: 45px;
	margin-bottom: 70px;
	width: ${misc.input.width};
	color: ${colors.input.text};
	height: ${misc.input.height};
	border: ${colors.input.border};
	font-size: ${fonts.input.fontSize};
	font-weight: ${fonts.input.fontWeight};
	background-color: ${colors.input.background};
	border-bottom: 1px solid ${colors.input.border}
	
	&::placeholder {
		color: ${colors.input.placeholder};
	}
`;

export const InputWrapper = styled.label`
	position: relative;
	display: flex;
	svg {
		fill: #000;
	}
`;

export const Icon = styled.img`
	top: 18px;
	left: 11px;
	position: absolute;
	width: ${misc.input.icon.width};
	height: ${misc.input.icon.height};
`;

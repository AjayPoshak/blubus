import styled from 'styled-components';
import { colors, fonts, misc } from '../Tokens';

export const Input = styled.input`
	outline: none;
	padding-left: 45px;
	width: ${misc.input.width};
	color: ${colors.input.text};
	height: ${misc.input.height};
	border: ${colors.input.border};
	font-size: ${fonts.input.fontSize};
	font-weight: ${fonts.input.fontWeight};
	background-color: ${colors.input.background};
	border-bottom: 1px solid ${colors.input.border};

	&::placeholder {
		color: ${colors.input.placeholder};
	}
`;

export const InputWrapper = styled.span`
	display: flex;
	position: relative;
	svg {
		fill: #000;
	}
	&:last-of-type {
		margin-top: 70px;
	}
`;

export const Icon = styled.img`
	top: 18px;
	left: 11px;
	position: absolute;
	width: ${misc.input.icon.width};
	height: ${misc.input.icon.height};
`;

export const ErrorWrapper = styled.span`
	top: 59px;
	left: 0;
	width: 100%;
	height: 45px;
	display: flex;
	position: absolute;
	align-items: center;
	background: #fef3f1;
	justify-content: space-around;
`;

export const ErrorMsg = styled.p`
	color: #cf2a2a;
`;

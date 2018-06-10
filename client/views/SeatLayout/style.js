import styled from 'styled-components';
import { colors } from '../../components/Tokens';

function getAttribute(variant) {
	switch (variant) {
	case 'booked':
		return colors.seats.booked.background;

	case 'available':
		return colors.seats.available.background;

	default:
		return colors.defaultColor;
	}
}

export const LegendColor = styled.span`
	display: inline-block;
	height: 20px;
	width: 20px;
	border-radius: 2px;
	background-color: ${props => getAttribute(props.variant)};
`;

export const Text = styled.p`
	display: inline-block;
	padding-left: 10px;
	vertical-align: middle;
`;

export const LegendWrapper = styled.section`
	display: flex;
	margin-left: 20px;
	align-items: center;
	justify-content: flex-start;
`;

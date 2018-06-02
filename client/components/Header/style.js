import styled from 'styled-components';
import { colors } from '../Tokens';

const HeaderWrapper = styled.section`
	width: 100%;
	height: 70px;
	background-color: ${colors.primary};
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 15px;
	box-sizing: border-box;
`;

export default HeaderWrapper;

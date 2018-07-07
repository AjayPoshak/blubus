import styled from 'styled-components';
import { colors } from '../../components/Tokens';

export const PageWrapper = styled.article`
	margin: 24px;
`;

export const SearchResultsWrapper = styled.section`
	top: 0;
	z-index: 99;
	width: 100%;
	background: #fff;
	position: relative;
`;

export const ResultsList = styled.ul`
	list-style-type: none;
`;

export const ResultsListItem = styled.li`
	min-width: 0;
	margin: 10px;
	display: flex;
	font-size: 21px;
	font-weight: 400;
	text-align: center;
	align-items: center;
	padding: 10px 3px 11px 10px;
	border-bottom: 1px solid #e5e5e5;
`;

export const ErrorWrapper = styled.section`
	display: flex;
	min-height: 500px;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

export const ErrorImg = styled.img`
	width: 80px;
	height: 80px;
`;

export const ErrorMsg = styled.article`
	padding: 25px;
	line-height: 25px;
	text-align: center;
`;

export const GoToHome = styled.button`
	position: fixed;
	bottom: 0;
	width: 90%;
	font-size: 15px;
	padding: 20px 15px;
	background: ${colors.button.primary.background};
	color: ${colors.button.primary.text};
	border-radius: 5px;
`;

import styled from 'styled-components';

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

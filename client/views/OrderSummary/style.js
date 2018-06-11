import styled from 'styled-components';

export const ButtonWrapper = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 1px solid #f2f2f2;

	button {
		width: 95%;
	}
`;

export const Wrapper = styled.article`
	margin: 20px;
`;

export const ContactInfo = styled.section`
	background: #fff;
	padding: 20px 10px;
	margin-bottom: 40px;
	border: 1px solid #f2f2f2;
`;

export const PassengerInfo = styled.section`
	background: #fff;
	padding: 20px 10px;
	margin-bottom: 100px;
	border: 1px solid #f2f2f2;
`;

export const InfoHeader = styled.header`
	h2 {
		font-size: 20px;
		font-weight: 400;
		padding-bottom: 5px;
	}
`;

export const SummaryInfo = styled.div`
	display: flex;
	font-size: 20px;
	align-items: center;
	padding-bottom: 15px;
	justify-content: space-evenly;

	img {
		width: 20px;
		height: 20px;
	}
`;

export const SummaryInfoList = styled.ul`
	margin-bottom: 25px;
	list-style-type: none;
`;

export const SummaryInfoItem = styled.li`
	display: flex;
	line-height: 40px;
	justify-content: space-between;
`;

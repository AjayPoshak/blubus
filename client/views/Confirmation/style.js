import styled from 'styled-components';

export const Wrapper = styled.article`
	margin: 20px;
`;

export const InfoWrapper = styled.section`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const BusImage = styled.img`
	height: 80px;
	width: 80px;
`;

export const CheckMark = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		height: 40px;
		width: 40px;
	}
`;

export const ConfirmMsg = styled.p`
	padding: 50px;
	text-align: center;
`;

export const ListItem = styled.li`
	display: flex;
	line-height: 30px;
	align-items: center;
	justify-content: space-between;
`;

import React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.span`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const LogoImg = styled.img`
	width: 40px;
	height: 40px;
`;

const LogoText = styled.h1`
	color: #fff;
	font-size: 25px;
	font-weight: 500;
	padding-left: 10px;
`;

const Logo = () => (
	<TextWrapper>
		<LogoImg alt="blubus logo" src="../../public/images/BluBus_192x192.png" />
		<LogoText>BluBus</LogoText>
	</TextWrapper>
);
export default Logo;

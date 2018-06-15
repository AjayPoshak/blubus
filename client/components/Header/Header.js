import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../logo';
import HeaderWrapper from './style';

const Header = () => (
	<HeaderWrapper>
		<Link style={{ textDecoration: 'none' }} to="/">
			<header>
				<Logo />
			</header>
		</Link>
	</HeaderWrapper>
);

export default Header;

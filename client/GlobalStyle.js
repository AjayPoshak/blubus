import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
	}

	body {
		font-family: 'Roboto', sans-serif;
	}

	ul {
		list-style-type: none;
	}
`;

export default GlobalStyle;

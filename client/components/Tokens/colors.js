const primaryColor = '#2396b0',
	secondaryColor = '#5cd5f0',
	white = '#fff',
	black = '#000',
	defaultColor = '#f1f1f1';

const colors = {
	primary: primaryColor,
	secondary: secondaryColor,
	input: {
		background: white,
		text: primaryColor,
		border: primaryColor,
		placeholder: primaryColor,
	},
	button: {
		primary: {
			text: white,
			background: secondaryColor,
		},
		default: {
			text: black,
			background: defaultColor,
		},
	},
};

export default colors;


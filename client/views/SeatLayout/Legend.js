import React from 'react';

import { LegendWrapper, LegendColor, Text } from './style';

const Legend = props => (
	<LegendWrapper>
		<LegendColor variant={props.variant} />
		<Text>{props.children}</Text>
	</LegendWrapper>
);

export default Legend;

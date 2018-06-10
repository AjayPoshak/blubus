import React from 'react';

import Header from '../../components/Header/Header';
import { Wrapper, InfoWrapper, BusImage, CheckMark, ConfirmMsg, ListItem } from './style';

const Confirmation = () => (
	<section>
		<Header />
		<Wrapper>
			<CheckMark>
				<img
					alt="confirmation"
					src="http://res.cloudinary.com/ddbxa4afa/image/upload/v1528637133/blubus/tick.svg"
				/>
			</CheckMark>
			<ConfirmMsg>Your tickets have been confirmed. Enjoy your ride.</ConfirmMsg>
			<InfoWrapper>
				<p>Kigali</p>
				<BusImage alt="bus" src="http://res.cloudinary.com/ddbxa4afa/image/upload/v1528636704/blubus/bus.svg" />
				<p>Kibuye</p>
			</InfoWrapper>
			<ul>
				<ListItem>
					<p>Tickets</p>
					<p>2</p>
				</ListItem>
				<ListItem>
					<p>Bus Fare</p>
					<p>400 $</p>
				</ListItem>
				<ListItem>
					<p>Booking Fee</p>
					<p>40 $</p>
				</ListItem>
				<ListItem>
					<p>Total</p>
					<p>440 $</p>
				</ListItem>
			</ul>
		</Wrapper>
	</section>
);

export default Confirmation;

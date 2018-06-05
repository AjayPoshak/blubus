import React from 'react';
import { CardWrapper, CardHeader, CompanyName, Currency, Timings, BusIcon, Timer, TimerWrapper } from './style';

const ListingCard = props => (
	<CardWrapper>
		<CardHeader>
			<CompanyName>Paulo Travels</CompanyName>
			<Currency>70 USD</Currency>
		</CardHeader>
		<Timings>
			<p>1730</p>
			<BusIcon alt="traveling-bus" src="http://res.cloudinary.com/ddbxa4afa/image/upload/v1528048630/blubus/traveling-bus.svg" />
			<p>0600</p>
			<TimerWrapper>
				<Timer alt="timer" src="http://res.cloudinary.com/ddbxa4afa/image/upload/v1528048884/blubus/timer.svg" />
				<p>18 hrs</p>
			</TimerWrapper>
		</Timings>
	</CardWrapper>
);

export default ListingCard;


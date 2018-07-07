// @flow
import * as React from 'react';
import { CardWrapper, CardHeader, CompanyName, Currency, Timings, BusIcon, Timer, TimerWrapper } from './style';

type Props = {
	price: string,
	currency: string,
	travelTime: string,
	clickHandler: () => void,
	arrivalTime: string,
	companyName: string,
	departureTime: string
};

const ListingCard = (props: Props) => (
	<CardWrapper onClick={props.clickHandler}>
		<CardHeader>
			<CompanyName>{props.companyName}</CompanyName>
			<Currency>
				{props.price} {props.currency}
			</Currency>
		</CardHeader>
		<Timings>
			<p>{props.arrivalTime}</p>
			<BusIcon
				alt="traveling-bus"
				src="https://res.cloudinary.com/ddbxa4afa/image/upload/v1528048630/blubus/traveling-bus.svg"
			/>
			<p>{props.departureTime}</p>
			<TimerWrapper>
				<Timer
					alt="timer"
					src="https://res.cloudinary.com/ddbxa4afa/image/upload/v1528048884/blubus/timer.svg"
				/>
				<p>{props.travelTime} hours</p>
			</TimerWrapper>
		</Timings>
	</CardWrapper>
);

ListingCard.defaultProps = {
	price: '',
	currency: '',
	travelTime: '',
	arrivalTime: '',
	companyName: '',
	departureTime: '',
	clickHandler: () => {}
};

export default ListingCard;

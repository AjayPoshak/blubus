import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper, CardHeader, CompanyName, Currency, Timings, BusIcon, Timer, TimerWrapper } from './style';

const ListingCard = props => (
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

ListingCard.propTypes = {
	price: PropTypes.string,
	currency: PropTypes.string,
	travelTime: PropTypes.string,
	clickHandler: PropTypes.func,
	arrivalTime: PropTypes.string,
	companyName: PropTypes.string,
	departureTime: PropTypes.string
};

export default ListingCard;

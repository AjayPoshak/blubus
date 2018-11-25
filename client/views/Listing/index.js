// @flow
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import uid from '../../utils/uid';
import ListingCard from './ListingCard';
import Header from '../../components/Header/Header';
import { fetchListingDataIfNeeded } from './actionCreators';
import { ListViewWrapper, JourneyDetailWrapper, FromToArrow } from './style';

type servicesValidation = {
	arr: string,
	dep: string,
	rating: string,
	busType: string,
	currency: string,
	travelTime: string,
	totalSeats: string,
	bookedSeats: string,
	companyName: string,
	ticketPrice: string
};

type Props = {
	dispatch: (?Function) => void,
	history: any,
	listing: {
		items: {
			busTypes: Array<string>,
			companyName: Array<string>,
			journeyDetails: {
				to: string,
				from: string,
				depDate: string,
				arrDate: string
			},
			services: Array<servicesValidation>
		}
	}
};
class Listing extends Component<Props> {
	constructor() {
		super();
		(this: any).onCardClick = this.onCardClick.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(fetchListingDataIfNeeded());
	}

	onCardClick() {
		this.props.history.push('/seatlayout');
	}

	render() {
		const { services, journeyDetails } = this.props.listing.items;
		return (
			<section>
				<Header />
				<section>
					{journeyDetails && (
						<JourneyDetailWrapper>
							<h2>{journeyDetails.from}</h2>
							<FromToArrow
								alt="arrow"
								src="https://res.cloudinary.com/ddbxa4afa/image/upload/v1528049570/blubus/right-arrow.svg"
							/>
							<h2>{journeyDetails.to}</h2>
						</JourneyDetailWrapper>
					)}
				</section>
				<ListViewWrapper>
					{services
						&& services.map((item) => {
							const { companyName, busType, dep, arr, travelTime, ticketPrice, currency } = item;
							return (
								<ListingCard
									key={uid()}
									busType={busType}
									arrivalTime={arr}
									departureTime={dep}
									price={ticketPrice}
									currency={currency}
									travelTime={travelTime}
									companyName={companyName}
									clickHandler={this.onCardClick}
								/>
							);
						})}
				</ListViewWrapper>
			</section>
		);
	}
}

const mapStateToProps = state => ({ listing: state.listing });

export default connect(mapStateToProps)(withRouter(Listing));

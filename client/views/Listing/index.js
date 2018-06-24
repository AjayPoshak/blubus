import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import uid from '../../utils/uid';
import ListingCard from './ListingCard';
import Header from '../../components/Header/Header';
import { fetchListingDataIfNeeded } from './actionCreators';
import { ListViewWrapper, JourneyDetailWrapper, FromToArrow } from './style';

class Listing extends Component {
	constructor() {
		super();
		this.onCardClick = this.onCardClick.bind(this);
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
					{services &&
						services.map((item) => {
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

const servicesValidation = PropTypes.shape({
	arr: PropTypes.string,
	dep: PropTypes.string,
	rating: PropTypes.string,
	busType: PropTypes.string,
	currency: PropTypes.string,
	travelTime: PropTypes.string,
	totalSeats: PropTypes.string,
	bookedSeats: PropTypes.string,
	companyName: PropTypes.string,
	ticketPrice: PropTypes.string
});

const journeyDetailsValidation = PropTypes.shape({
	to: PropTypes.string,
	from: PropTypes.string,
	depDate: PropTypes.string,
	arrDate: PropTypes.string
});

ListingCard.propTypes = {
	dispatch: PropTypes.func,
	listing: PropTypes.shape({
		items: PropTypes.shape({
			busTypes: PropTypes.arrayOf(PropTypes.string),
			companyName: PropTypes.arrayOf(PropTypes.string),
			journeyDetails: PropTypes.shape(journeyDetailsValidation),
			services: PropTypes.arrayOf(PropTypes.shape(servicesValidation))
		})
	})
};

const mapStateToProps = state => ({ listing: state.listing });

export default connect(mapStateToProps)(withRouter(Listing));

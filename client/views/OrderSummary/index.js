import React, { Component } from 'react';

import Summary from './Summary';
import { Wrapper } from './style';
import UserDetails from './UserDetails';
import Header from '../../components/Header/Header';

class OrderSummary extends Component {
	constructor() {
		super();
		this.state = {
			showOrderSummary: true
		};
	}

	handleOrderSummary(shouldShow) {
		this.setState({ showOrderSummary: shouldShow });
	}

	render() {
		return (
			<section>
				<Header />
				<Wrapper>
					{this.state.showOrderSummary ? (
						<Summary />
					) : (
						<UserDetails handleOrderSummary={this.handleOrderSummary} />
					)}
				</Wrapper>
			</section>
		);
	}
}

export default OrderSummary;

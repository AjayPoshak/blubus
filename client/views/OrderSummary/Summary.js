import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../../components/Button';
import { SummaryInfo, SummaryInfoList, SummaryInfoItem } from './style';

class Summary extends Component {
	constructor() {
		super();
		this.payNow = this.payNow.bind(this);
	}

	payNow() {
		this.props.history.push('/confirmation');
	}

	render() {
		return (
			<section>
				<article>
					<SummaryInfo>
						<p>Kigali</p>
						<img
							alt="to"
							src="http://res.cloudinary.com/ddbxa4afa/image/upload/v1528049570/blubus/right-arrow.svg"
						/>
						<p>Kibuye</p>
					</SummaryInfo>
					<SummaryInfoList>
						<SummaryInfoItem>
							<p>Bus Fare</p>
							<p>400 $</p>
						</SummaryInfoItem>
						<SummaryInfoItem>
							<p>Booking Fare</p>
							<p>40 $</p>
						</SummaryInfoItem>
						<SummaryInfoItem>
							<p>Total</p>
							<p>440 $</p>
						</SummaryInfoItem>
					</SummaryInfoList>
					<Button appearance="primary" handleClick={this.payNow}>
						Pay Now
					</Button>
				</article>
			</section>
		);
	}
}

Summary.propTypes = {
	history: PropTypes.shape({ push: PropTypes.func }).isRequired
};

export default withRouter(Summary);

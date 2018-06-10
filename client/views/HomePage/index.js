import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Search from './Search';
import { PageWrapper } from './style';
import Button from '../../components/Button';
import { fetchSearch } from './actionCreators';
import Header from '../../components/Header/Header';

class HomePage extends Component {
	constructor() {
		super();
		this.handleFrom = this.handleFrom.bind(this);
		this.handleSearchClick = this.handleSearchClick.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(fetchSearch());
	}

	handleFrom(value) {
		console.log('From', value);
	}

	handleTo(value) {
		console.log('To', value);
	}

	handleSearchClick() {
		this.props.history.push('/listing');
	}

	render() {
		return (
			<section>
				<section>
					<Header />
					<PageWrapper>
						<Search
							type="text"
							dispatch={this.props.dispatch}
							handleSearchResultSelection={this.handleFrom}
							placeholder="Choose your location"
							result={this.props.homePage.searchResult}
							icon="http://res.cloudinary.com/ddbxa4afa/image/upload/v1527944418/blubus/location.svg"
						/>
						<Search
							type="text"
							dispatch={this.props.dispatch}
							handleSearchResultSelection={this.handleTo}
							placeholder="Choose your destination"
							result={this.props.homePage.searchResult}
							icon="http://res.cloudinary.com/ddbxa4afa/image/upload/v1527944416/blubus/destination.svg"
						/>
						<div style={{ marginTop: '70px' }}>
							<Button appearance="primary" handleClick={this.handleSearchClick}>
								Search Buses
							</Button>
						</div>
					</PageWrapper>
				</section>
			</section>
		);
	}
}

const mapStateToProps = state => ({ homePage: state.homePage });

export default connect(mapStateToProps)(withRouter(HomePage));

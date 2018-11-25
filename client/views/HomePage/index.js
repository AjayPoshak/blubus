// @flow
import React, { Component } from 'react';
// import Calendar from 'rc-calendar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Search from './Search';
import { PageWrapper } from './style';
import Button from '../../components/Button';
import { fetchSearch } from './actionCreators';
import Calendar from '../../components/Calendar';
import TextInput from '../../components/TextInput';
import Header from '../../components/Header/Header';

type Props = {
	dispatch: (?Function) => void,
	history: any,
	homePage: Object
};

class HomePage extends Component<Props> {
	constructor() {
		super();
		(this: any).handleFrom = this.handleFrom.bind(this);
		(this: any).handleSearchClick = this.handleSearchClick.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(fetchSearch());
	}

	handleFrom(value: string) {
		console.log('From', value);
	}

	handleTo(value: string) {
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
							icon="https://res.cloudinary.com/ddbxa4afa/image/upload/v1527944418/blubus/location.svg"
						/>
						<div style={{ marginTop: '70px', marginBottom: '70px' }}>
							<Search
								type="text"
								dispatch={this.props.dispatch}
								handleSearchResultSelection={this.handleTo}
								placeholder="Choose your destination"
								result={this.props.homePage.searchResult}
								icon="https://res.cloudinary.com/ddbxa4afa/image/upload/v1527944416/blubus/destination.svg"
							/>
						</div>
						<Calendar showToday showTimePicker placeholder="Choose date for journey" />
						<div style={{ marginTop: '70px' }}>
							<Button appearance="primary" handleClick={this.handleSearchClick}>
								Search Buses Yes
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

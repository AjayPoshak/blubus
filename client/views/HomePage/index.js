import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import PageWrapper from './style';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import Header from '../../components/Header/Header';


class HomePage extends Component {
	constructor() {
		super();
		this.handleSearchClick = this.handleSearchClick.bind(this);
	}
	handleFrom(event) {
		console.log(event);
	}

	handleTo(event, value) {
		console.log(value);
	}

	handleSearchClick(event) {
		this.props.history.push('/listing');
	}

	render() {
		return (
			<section>
				<section>
					<Header />
					<PageWrapper>
						<TextInput type="text" placeholder="Choose your location" handleChange={this.handleFrom} icon="http://res.cloudinary.com/ddbxa4afa/image/upload/v1527944418/blubus/location.svg" />
						<TextInput type="text" placeholder="Choose your destination" handleChange={this.handleTo} icon="http://res.cloudinary.com/ddbxa4afa/image/upload/v1527944416/blubus/destination.svg" />
						<Button appearance="primary" handleClick={this.handleSearchClick}>Search Buses</Button>
					</PageWrapper>
				</section>
			</section>
		);
	}
}

export default withRouter(HomePage);

import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import TextInput from '../../components/TextInput';
import PageWrapper from './style';

import Button from '../../components/Button';

class HomePage extends Component {
	handleFrom(event) {
		console.log(event);
	}

	handleTo(event, value) {
		console.log(value);
	}

	handleClick(event) {
		console.log(event);
	}

	render() {
		return (
			<section>
				<section>
					<Header />
					<PageWrapper>
						<TextInput type="text" placeholder="Choose your location" handleChange={this.handleFrom} icon="http://res.cloudinary.com/ddbxa4afa/image/upload/v1527944418/blubus/location.svg" />
						<TextInput type="text" placeholder="Choose your destination" handleChange={this.handleTo} icon="http://res.cloudinary.com/ddbxa4afa/image/upload/v1527944416/blubus/destination.svg" />
						<Button appearance="primary" handleClick={this.handleClick}>Search Buses</Button>
					</PageWrapper>
				</section>
			</section>
		);
	}
}

export default HomePage;

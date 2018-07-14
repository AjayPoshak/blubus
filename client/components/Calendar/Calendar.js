import React, { Component, Fragment } from 'react';
import TextInput from '../TextInput';

import Calendar from 'rc-calendar';

class CustomCalendar extends Component {
	constructor() {
		super();
		this.selectDate = this.selectDate.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.state = {
			showCalendar: false,
			selectedDate: ''
		};
	}

	selectDate(d) {
		const selDate = d.format('DD/MM/YYYY');
		this.setState({
			selectedDate: selDate,
			showCalendar: false
		});
	}

	handleChange(event) {
		console.log(event.currentTarget);
	}

	handleFocus(event) {
		this.setState({ showCalendar: true });
	}

	render() {
		return (
			<Fragment>
				<TextInput
					type="text"
					icon="https://res.cloudinary.com/ddbxa4afa/image/upload/v1531114873/blubus/calendar.svg"
					onFocus={this.handleFocus}
					handleChange={this.handleChange}
					value={this.state.selectedDate}
					placeholder={this.props.placeholder}
				/>
				{this.state.showCalendar && (
					<Calendar {...this.props} onSelect={this.selectDate} prefixClass="react-cal-" />
				)}
			</Fragment>
		);
	}
}

export default CustomCalendar;

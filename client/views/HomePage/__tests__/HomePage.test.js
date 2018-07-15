import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { HomePage } from '../index';
import { fullRender } from '../../../utils/testUtils';

describe('Home Page component', () => {
	const mockData = {
		homePage: {
			searchResult: [{ city: 'Ajmer' }, { city: 'Mumbai' }, { city: 'Jaipur' }, { city: 'Amer' }]
		},
		dispatch: jest.fn()
	};
	let wrapper;

	beforeAll(() => {
		wrapper = fullRender(HomePage, mockData);
	});

	it('renders Header component', () => {
		expect(wrapper.find('Header').length).toBe(1);
	});

	it('has three input boxes', () => {
		expect(wrapper.find('input').length).toBe(3);
	});

	it('search button is rendered', () => {
		expect(wrapper.find('button').length).toBe(1);
	});

	it('first inputbox takes location input', () => {
		wrapper
			.find('input')
			.first()
			.simulate('change', {
				target: { value: 'a' }
			});
		const firstInput = wrapper.find('input').first();
		expect(firstInput.props().value).toBe('a');
	});

	it('search results are shown for location input', () => {
		wrapper
			.find('input')
			.first()
			.simulate('change', {
				target: { value: 'a' }
			});
		const firstInput = wrapper.find('input').first();
		expect(wrapper.find('SearchResults').length).toBe(1);
	});

	it('second inputbox takes destination input', () => {
		wrapper
			.find('input')
			.at(1)
			.simulate('change', {
				target: { value: 'm' }
			});
		expect(
			wrapper
				.find('input')
				.at(1)
				.props().value
		).toBe('m');
	});

	it('search results are shown for destination input', () => {
		/**
		 *  For first input click on SearchResults and simulate click
		 *  on first element so that SearchResults closes for first element
		 **/
		wrapper
			.find('SearchResults li')
			.first()
			.simulate('click');
		wrapper
			.find('input')
			.at(1)
			.simulate('change', {
				target: { value: 'm' }
			});
		expect(wrapper.find('SearchResults').length).toBe(1);
	});

	it('focus third inputbox opens calendar widget', () => {
		wrapper
			.find('input')
			.last()
			.simulate('focus');
		expect(wrapper.find('Calendar').length).toBe(1);
	});

	it("select today's date as journey date from calendar", () => {
		wrapper
			.find('input')
			.last()
			.simulate('focus');
		const today = new Date();
		const currentDate = ('0' + today.getDate()).slice(-2),
			currentMonth = ('0' + (today.getMonth() + 1)).slice(-2),
			currentYear = today.getFullYear(),
			currentJourneyDate = `${currentDate}/${currentMonth}/${currentYear}`;

		expect(wrapper.find('Calendar .rc-calendar-selected-day').text()).toBe(currentDate.toString());
		wrapper.find('Calendar .rc-calendar-selected-day').simulate('click');
		expect(
			wrapper
				.find('input')
				.last()
				.props().value
		).toBe(currentJourneyDate);
	});

	it('calendar closes after date input has been selected', () => {
		wrapper
			.find('input')
			.last()
			.simulate('focus');
		wrapper.find('Calendar .rc-calendar-selected-day').simulate('click');
		expect(wrapper.find('Calendar').length).toBe(0);
	});

	it('UI snapshot of homePage component', () => {
		const tree = renderer.create(wrapper).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

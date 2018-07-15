/* eslint function-paren-newline: ["error", "never"] */
import React from 'react';
import { render, shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import ListingCard from '../ListingCard';

// describe('has click handler', () => {});
function renderListingCard(props = {}) {
	return render(<ListingCard {...props} />);
}
describe('Testing ListingCard Component', () => {
	it('has company name', () => {
		const wrapper = renderListingCard({ companyName: 'PR Travels' });
		expect(wrapper.find('h2').text()).toBe('PR Travels');
	});

	it('has currency', () => {
		const wrapper = renderListingCard({ currency: '$' });
		expect(wrapper.find('header p').text()).toBe(' $');
	});

	it('has price', () => {
		const wrapper = renderListingCard({ price: '210' });
		expect(wrapper.find('header p').text()).toBe('210 ');
	});

	it('has arrival time', () => {
		const wrapper = renderListingCard({ arrivalTime: '12:30 PM' });
		expect(
			wrapper
				.find('article p')
				.first()
				.text()
		).toBe('12:30 PM');
	});

	it('has departure time', () => {
		const wrapper = renderListingCard({ departureTime: '1:30 PM' });
		expect(wrapper.find('article > p').text()).toBe('1:30 PM');
	});

	it('has travel time', () => {
		const wrapper = renderListingCard({ travelTime: '11' });
		expect(
			wrapper
				.find('article p')
				.last()
				.text()
		).toBe('11 hours');
	});

	it('onClick handler has been called', () => {
		// const clickHandler = jest.fn();
		// const wrapper = mount(<ListingCard />, { clickHandler });
		// expect(wrapper.find('section').length).toBe(1);
		// wrapper.find('section').simulate('click');
		// expect(clickHandler.mock.calls.length).toBe(1);
	});

	// Compare snapshot
	it('compare snapshot for UI changes', () => {
		const wrapper = renderer
			.create(
				mount(
					<ListingCard
						companyName="Pawan Tours"
						currency="#"
						price="511"
						arrivalTime="11:00 AM"
						departureTime="12:30 PM"
						travelTime="9 hours"
					/>
				)
			)
			.toJSON();
		expect(wrapper).toMatchSnapshot();
	});
});

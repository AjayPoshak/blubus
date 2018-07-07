import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';

import { Listing } from '../index';

function mountComponent(props = {}) {
	return mount(
		<MemoryRouter>
			<Listing {...props} />
		</MemoryRouter>
	);
}

describe('Schedules listing component', () => {
	const mockData = {
		listing: {
			items: {
				journeyDetails: { to: 'Kigali', from: 'kibuye', depDate: '12 Jan', arrivalDate: '14 Jan' },
				services: [
					{
						companyName: 'MR Travels',
						busType: 'AC',
						dep: '',
						arr: '',
						travelTime: '',
						ticketPrice: '',
						currency: ''
					},
					{
						companyName: 'MRP Travels',
						busType: 'AC',
						dep: '',
						arr: '',
						travelTime: '',
						ticketPrice: '',
						currency: ''
					}
				]
			}
		},
		dispatch: jest.fn()
	};
	let wrapper;
	beforeEach(() => {
		wrapper = mountComponent(mockData);
	});

	it('rendering journey details', () => {
		expect(
			wrapper
				.find('section header h2')
				.first()
				.text()
		).toBe('kibuye');
	});

	it('rendering journey schedules', () => {
		// Checking if journey details are rendered as many times the data is passed.
		// Rest of rendering of props has been handled in UT of ListingCard.
		expect(wrapper.find('ListingCard').length).toBe(2);
	});

	it('contains header component', () => {
		expect(wrapper.find('Header').length).toBe(1);
	});

	it('UI snapshots', () => {
		const tree = renderer.create(mountComponent(mockData)).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

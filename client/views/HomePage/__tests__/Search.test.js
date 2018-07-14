import React from 'react';
import { mount } from 'enzyme';

import Search from '../Search';
import SearchResults from '../SearchResults';
import { fullRender, shallowRender } from '../../../utils/testUtils';

describe('Search Component', () => {
	const mockData = {
		icon: '',
		type: 'text',
		placeholder: 'Select search',
		result: [{ city: 'Ajmer' }, { city: 'Mumbai' }, { city: 'Jaipur' }, { city: 'Amer' }],
		handleSearchResultSelection: jest.fn(),
		dispatch: jest.fn()
	};
	let wrapper, input;
	beforeAll(() => {
		wrapper = fullRender(Search, mockData);
		input = wrapper.find('input');
	});

	it('has text input', () => {
		expect(input.length).toBe(1);
	});

	it('input takes value and search results are shown', () => {
		input.simulate('change', {
			target: { value: 'a' }
		});
		expect(wrapper.find('SearchResults').length).toBe(1);
	});

	it('search results can be clicked', () => {
		input.simulate('change', {
			target: { value: 'a' }
		});
		wrapper
			.find('ListItem')
			.first()
			.simulate('click');
		expect(mockData.handleSearchResultSelection).toHaveBeenCalledTimes(1);
	});

	it('search results hide after user selection', () => {
		input.simulate('change', {
			target: { value: 'a' }
		});
		wrapper
			.find('ListItem')
			.first()
			.simulate('click');
		expect(wrapper.find('SearchResults').length).toBe(0);
	});
});

describe('Search Results component', () => {
	const mockData = {
		result: [{ city: 'Ajmer' }, { city: 'Mumbai' }, { city: 'Jaipur' }, { city: 'Amer' }],
		handleSearchResultSelection: jest.fn(),
		dispatch: jest.fn()
	};
	let wrapper, input;
	beforeAll(() => {
		wrapper = shallowRender(SearchResults, mockData);
	});

	it('showing correct number of results', () => {
		expect(wrapper.find('ListItem').length).toBe(4);
		const texts = wrapper.find('ListItem').map(node => {
			return node.children().text();
		});
		expect(texts).toEqual(['Ajmer', 'Mumbai', 'Jaipur', 'Amer']);
	});
});

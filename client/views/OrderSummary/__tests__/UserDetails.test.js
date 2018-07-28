import React from 'react';

import UserDetails from '../UserDetails';
import { fullRender, shallowRender } from '../../../utils/testUtils';
import { EMAIL_ERROR, MOBILE_ERROR, NAME_ERROR, AGE_ERROR } from '../constants';

describe('testing userDetails component', () => {
	let wrapper;
	const mockProps = {
		handleOrderSummary: jest.fn()
	};
	beforeAll(() => {
		wrapper = fullRender(UserDetails, mockProps);
	});

	it('has four input boxes and a button', () => {
		expect(wrapper.find('TextInput').length).toBe(4);
		expect(wrapper.find('Button').length).toBe(1);
	});

	it('takes email', () => {
		const email = 'poshakajay@gmail.com';
		wrapper
			.find('input')
			.first()
			.simulate('change', {
				target: { value: email }
			});
		expect(
			wrapper
				.find('input')
				.first()
				.props().value
		).toBe(email);
	});

	it('throws error for invalid email', () => {
		wrapper
			.find('input')
			.first()
			.simulate('change', {
				target: { value: 'poshakajay' }
			});
		expect(
			wrapper
				.find('TextInput span #error')
				.first()
				.text()
		).toBe(EMAIL_ERROR);
		wrapper
			.find('input')
			.first()
			.simulate('change', {
				target: { value: 'poshakajay@' }
			});
		expect(
			wrapper
				.find('TextInput span #error')
				.first()
				.text()
		).toBe(EMAIL_ERROR);
	});

	it('throws error for empty email', () => {
		wrapper
			.find('input')
			.first()
			.simulate('change', {
				target: { value: '' }
			});
		expect(
			wrapper
				.find('TextInput span #error')
				.first()
				.text()
		).toBe(EMAIL_ERROR);
	});

	it('takes mobile number', () => {
		const mobile = 9953527871;
		wrapper
			.find('input')
			.at(1)
			.simulate('change', {
				target: { value: mobile }
			});
		expect(
			wrapper
				.find('input')
				.at(1)
				.props().value
		).toBe(mobile);
	});

	it('mobile number should be number only', () => {
		wrapper
			.find('input [type="tel"]')
			.first()
			.simulate('change', {
				target: { value: 'mobile' }
			});
		expect(
			wrapper
				.find('TextInput [type="tel"]')
				.first()
				.text()
		).toBe(MOBILE_ERROR);
	});
	it('mobile number cannot be greater than 10 digits', () => {
		wrapper
			.find('input [type="tel"]')
			.first()
			.simulate('change', {
				target: { value: 987 }
			});
		expect(
			wrapper
				.find('TextInput [type="tel"]')
				.first()
				.text()
		).toBe(MOBILE_ERROR);
	});

	it('mobile number cannot be empty', () => {
		wrapper
			.find('input [type="tel"]')
			.first()
			.simulate('change', {
				target: { value: '' }
			});
		expect(
			wrapper
				.find('TextInput [type="tel"]')
				.first()
				.text()
		).toBe(MOBILE_ERROR);
	});

	it('takes name', () => {
		const name = 'Mahima';
		wrapper
			.find('input [type="text"]')
			.first()
			.simulate('change', {
				target: { value: name }
			});
		expect(
			wrapper
				.find('TextInput [type="text"]')
				.first()
				.props().value
		).toBe(name);
	});

	it('throws error on invalid name', () => {
		wrapper
			.find('input [type="text"]')
			.first()
			.simulate('change', {
				target: { value: 'name11$*&' }
			});
		expect(
			wrapper
				.find('TextInput [type="text"]')
				.first()
				.text()
		).toBe(NAME_ERROR);
	});

	it('takes age', () => {
		const age = 26;
		wrapper
			.find('input [type="number"]')
			.first()
			.simulate('change', {
				target: { value: age }
			});
		expect(
			wrapper
				.find('TextInput [type="number"]')
				.first()
				.props().value
		).toBe(age);
	});

	it('throws error on empty or invalid age', () => {
		wrapper
			.find('input [type="number"]')
			.first()
			.simulate('change', {
				target: { value: '' }
			});
		expect(
			wrapper
				.find('TextInput [type="number"]')
				.first()
				.text()
		).toBe(AGE_ERROR);
		wrapper
			.find('input [type="number"]')
			.first()
			.simulate('change', {
				target: { value: 'ab' }
			});
		expect(
			wrapper
				.find('TextInput [type="number"]')
				.first()
				.text()
		).toBe(AGE_ERROR);
	});

	// it('continue booking button validates all input fields', () => {});
});

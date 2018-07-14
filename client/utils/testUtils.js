import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount, render, shallow } from 'enzyme';

export function fullRender(Component, props = {}) {
	return mount(
		<MemoryRouter>
			<Component {...props} />
		</MemoryRouter>
	);
}

export function staticRender(Component, props = {}) {
	return render(<Component {...props} />);
}

export function shallowRender(Component, props = {}) {
	return shallow(<Component {...props} />);
}

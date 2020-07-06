import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Cart } from 'components/Cart/Cart';

test('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Cart />, div);
});

test('empty cart should have empty class', () => {
	const { getByTestId } = render(<Cart />);
	expect(getByTestId('cart').classList.contains('empty')).toBe(true);
});

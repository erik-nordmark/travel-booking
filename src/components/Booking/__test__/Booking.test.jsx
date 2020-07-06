import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Booking } from 'components/Booking/Booking';

test('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Booking />, div);
});

test('matches snapshot', () => {
	const tree = renderer
		.create(<Booking titel='test' price={5} unit='per person' />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

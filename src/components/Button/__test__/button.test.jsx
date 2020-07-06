import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import { DarkButton } from 'components/Button/Button';

test('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<DarkButton />, div);
});

test('renders button correctly', () => {
	const { getByTestId } = render(<DarkButton label='test' disabled full />);
	expect(getByTestId('button')).toHaveTextContent('test');
});

test('matches snapshot', () => {
	const tree = renderer
		.create(<DarkButton label='test' disabled full />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

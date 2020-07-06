import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from 'components/Header/Header';

test('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Header />, div);
});

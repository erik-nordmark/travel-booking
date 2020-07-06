import React from 'react';
import ReactDOM from 'react-dom';

import { Hero } from 'components/Hero/Hero';

test('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Hero />, div);
});

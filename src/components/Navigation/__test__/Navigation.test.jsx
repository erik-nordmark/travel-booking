import React from 'react';
import ReactDOM from 'react-dom';

import { Navigation } from 'components/Navigation/Navigation';

test('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Navigation />, div);
});

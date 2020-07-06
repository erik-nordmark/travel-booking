import React from 'react';
import ReactDOM from 'react-dom';

import { Text } from 'components/Text/Text';

test('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Text />, div);
});

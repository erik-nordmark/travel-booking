import React from 'react';
import ReactDOM from 'react-dom';

import { Post } from 'components/Post/Post';

test('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Post />, div);
});

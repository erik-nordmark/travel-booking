import React from 'react';
import ReactDOM from 'react-dom';

import { RecommendationCarousel } from 'components/RecommendationCarousel/RecommendationCarousel';

test('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<RecommendationCarousel />, div);
});

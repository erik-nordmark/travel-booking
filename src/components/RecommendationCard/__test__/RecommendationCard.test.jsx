import React from 'react';
import ReactDOM from 'react-dom';

import { RecommendationCard } from 'components/RecommendationCard/RecommendationCard';

test('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<RecommendationCard />, div);
});

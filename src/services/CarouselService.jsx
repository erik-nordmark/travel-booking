import { db } from 'mock-data/db';

export const getCarousel = () => {
	let error;

	// Implement api call
	const data = db.carousel;

	return { data, error };
};

import { db } from 'mock-data/db';

export const getFeatured = () => {
	let error;

	// Implement api call
	const data = db.featured;

	return { data, error };
};

export const getFeaturedById = (id) => {
	let error;

	// Implement api call
	const data = db.featured.find((feature) => feature.id === id);

	return { data, error };
};

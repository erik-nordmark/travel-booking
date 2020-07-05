import { db } from 'mock-data/db';

export const getFeatured = () => {
	let error;

	// Implement api call
	const data = db.featured;

	return { data, error };
};

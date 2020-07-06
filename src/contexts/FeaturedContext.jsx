import React, { createContext, useState, useMemo } from 'react';
import { getFeatured, getFeaturedById } from 'services/FeaturedService';

export const FeaturedContext = createContext({});

export const FeaturedConsumer = FeaturedContext.Consumer;

export const FeaturedProvider = ({ children }) => {
	const [featured, setFeatured] = useState(null);
	const [isFeaturedLoading, setFeaturedLoading] = useState(false);
	const [featuredError, setFeaturedError] = useState(null);

	const getFeaturedCallback = useMemo(
		() => async () => {
			setFeaturedLoading(true);
			const response = getFeatured();

			if (response.error) {
				setFeaturedError(response.error);
			}
			setFeatured(response.data);
			setFeaturedLoading(false);
		},
		[featured]
	);

	const getFeaturedByIdCallback = (id) => {
		setFeaturedLoading(true);
		if (!featured) {
			const response = getFeaturedById(id);
			if (response.error) {
				setFeaturedError(response.error);
			}
			setFeaturedLoading(false);
			return response.data;
		}

		const item = featured.find((feature) => feature.id === id);
		if (!item) {
			setFeaturedError(Error('Id does not exists.'));
		}
		setFeaturedLoading(false);
		return item;
	};

	const state = {
		getFeatured: getFeaturedCallback,
		getFeaturedById: getFeaturedByIdCallback,
		featured,
		featuredError,
		isFeaturedLoading,
	};

	const providerValue = useMemo(() => state, [state]);

	return (
		<FeaturedContext.Provider value={providerValue}>
			{children}
		</FeaturedContext.Provider>
	);
};

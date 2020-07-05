import React, { createContext, useState, useMemo } from 'react';
import { getFeatured } from 'services/featuredService';

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

	const state = {
		getFeatured: getFeaturedCallback,
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

import React, { createContext, useState, useMemo } from 'react';
import { getCarousel } from 'services/CarouselService';

export const CarouselContext = createContext({});

export const CarouselConsumer = CarouselContext.Consumer;

export const CarouselProvider = ({ children }) => {
	const [carousel, setCarousel] = useState(null);
	const [isCarouselLoading, setCarouselLoading] = useState(false);
	const [carouselError, setCarouselError] = useState(null);

	const getCarouselCallback = useMemo(
		() => async () => {
			setCarouselLoading(true);
			const response = getCarousel();

			if (response.error) {
				setCarouselError(response.error);
			}
			setCarousel(response.data);
			setCarouselLoading(false);
		},
		[carousel]
	);

	const state = {
		getCarousel: getCarouselCallback,
		carousel,
		carouselError,
		isCarouselLoading,
	};

	const providerValue = useMemo(() => state, [state]);

	return (
		<CarouselContext.Provider value={providerValue}>
			{children}
		</CarouselContext.Provider>
	);
};

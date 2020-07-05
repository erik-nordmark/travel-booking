import React, { useEffect, useCallback, useContext } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { Hero } from 'components/Hero/Hero';
import { Main } from 'components/Main/Main';
import { RecommendationCarousel } from 'components/RecommendationCarousel/RecommendationCarousel';
import { FeaturedContext } from 'contexts/featuredContext';
import { CarouselContext } from 'contexts/carouselContext';

export const LandingPage = () => {
	const {
		getFeatured,
		featured,
		isFeaturedLoading,
		featuredError,
	} = useContext(FeaturedContext);

	const {
		getCarousel,
		carousel,
		isCarouselLoading,
		carouselError,
	} = useContext(CarouselContext);

	const memoizeGetFeatured = useCallback(async () => {
		await getFeatured();
	}, [featured]);

	const memoizeGetCarousel = useCallback(async () => {
		await getCarousel();
	}, [carousel]);

	useEffect(() => {
		memoizeGetFeatured();
	}, [memoizeGetFeatured]);

	useEffect(() => {
		memoizeGetCarousel();
	}, [memoizeGetCarousel]);

	const getHeroComponent = () => {
		if (featured) {
			console.log(featured[0]);
			return <Hero feature={featured[0]} />;
		}
	};

	const getMainComponent = () => {
		if (featured && featured.length > 1) {
			return <Main featured={featured.slice(1)} />;
		}
	};

	const getCarouselComponent = () => {
		console.log(carousel);
		if (carousel && carousel.items.length > 0) {
			console.log('TESTS');
			return <RecommendationCarousel items={carousel.items} />;
		}
	};

	return (
		<>
			<Navigation />
			{!isFeaturedLoading && !featuredError && (
				<>
					{getHeroComponent()}
					{getMainComponent()}
				</>
			)}

			{!isCarouselLoading && !carouselError && getCarouselComponent()}
		</>
	);
};

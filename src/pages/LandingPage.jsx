import React, { useEffect, useCallback, useContext } from 'react';
import { Header } from 'components/Header/Header';
import { Navigation } from 'components/Navigation/Navigation';
import { Hero } from 'components/Hero/Hero';
import { Main } from 'components/Main/Main';
import { RecommendationCarousel } from 'components/RecommendationCarousel/RecommendationCarousel';
import { FeaturedContext } from 'contexts/FeaturedContext';
import { CarouselContext } from 'contexts/CarouselContext';
import { Lockup } from 'components/Lockup/Lockup';

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
			return (
				<Hero image={featured[0].media.large.url}>
					<Lockup
						title={featured[0].title}
						price={featured[0].price.value}
						unit={featured[0].unit}
						id={featured[0].id}
					/>
				</Hero>
			);
		}
	};

	const getMainComponent = () => {
		if (featured && featured.length > 1) {
			return <Main featured={featured.slice(1)} />;
		}
	};

	const getCarouselComponent = () => {
		if (carousel && carousel.items.length > 0) {
			return <RecommendationCarousel items={carousel.items} />;
		}
	};

	return (
		<>
			<Header>
				<Navigation />
			</Header>
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

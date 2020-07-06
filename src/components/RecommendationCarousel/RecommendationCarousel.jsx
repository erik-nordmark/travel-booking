import React from 'react';
import Swiper from 'react-id-swiper';
import { RecommendationCard } from 'components/RecommendationCard/RecommendationCard';
import 'swiper/swiper.scss';

import styles from './RecommendationCarousel.module.scss';

export const RecommendationCarousel = ({ items }) => {
	const params = {
		slidesPerView: 4,
		spaceBetween: 30,
		loopFillGroupWithBlank: false,
	};

	return (
		<section className={styles.recommendationCarouselWrapper}>
			<div className={styles.recommendationCarouselHeader}>
				<h4>Adventure awaits out there</h4>
				<p>Get out and expreience Scandinavian way of living</p>
			</div>

			{/* <div className={styles.carousel}> */}
			<Swiper params={params}>
				{items &&
					items.map((item) => (
						<RecommendationCard
							key={item.id}
							title={item.title}
							price={item.price.value}
							image={item.media.small.url}
							unit={item.price.unit}
							id={item.id}
						/>
					))}
			</Swiper>
			{/* </div> */}
		</section>
	);
};

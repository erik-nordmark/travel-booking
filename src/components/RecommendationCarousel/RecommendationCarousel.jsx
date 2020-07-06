import React from 'react';
import { RecommendationCard } from 'components/RecommendationCard/RecommendationCard';

import styles from './RecommendationCarousel.module.scss';

export const RecommendationCarousel = ({ items }) => {
	return (
		<section className={styles.recommendationCarouselWrapper}>
			<div className={styles.recommendationCarouselHeader}>
				<h4>Adventure awaits out there</h4>
				<p>Get out and expreience Scandinavian way of living</p>
			</div>

			<div className={styles.carousel}>
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
			</div>
		</section>
	);
};

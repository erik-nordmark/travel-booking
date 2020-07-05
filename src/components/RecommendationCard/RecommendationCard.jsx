import React from 'react';

import { Lockup } from 'components/Lockup/Lockup';
import styles from './RecommendationCard.module.scss';

export const RecommendationCard = ({ title, price, image, unit }) => {
	return (
		<div className={styles.recommendationCardWrapper}>
			<div
				className={styles.imageContainer}
				style={{ backgroundImage: `url(${image}` }}
			/>
			<div className={styles.content}>
				<Lockup title={title} price={price} unit={unit} isCarousel />
			</div>
		</div>
	);
};

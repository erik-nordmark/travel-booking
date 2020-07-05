import React from 'react';
import { Lockup } from 'components/Lockup/Lockup';
import styles from './Hero.module.scss';

export const Hero = ({ feature }) => {
	console.log('Hero', feature);
	return (
		<section
			className={styles.heroWrapper}
			style={{ backgroundImage: `url(${feature.media.large.url}` }}
		>
			<div className={styles.lockupWrapper}>
				<Lockup
					title={feature.title}
					price={feature.price.value}
					unit={feature.unit}
				/>
			</div>
		</section>
	);
};

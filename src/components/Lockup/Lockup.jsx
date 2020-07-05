import { Button } from 'components/Button/Button';

import React from 'react';
import { LightButton } from 'components/Button/Button';
import styles from './Lockup.module.scss';

export const Lockup = ({ title, price, unit, isCarousel }) => {
	return (
		<div className={styles.lockupWrapper}>
			<div className={styles.lockup}>
				<h2>{title}</h2>
				<p>{`from ${price} ${unit}`}</p>
				<LightButton full={isCarousel} label='Book experience' />
			</div>
		</div>
	);
};

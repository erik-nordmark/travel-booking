import React from 'react';
import { Lockup } from 'components/Lockup/Lockup';
import styles from './Hero.module.scss';

export const Hero = ({ children, image }) => {
	return (
		<section
			className={styles.heroWrapper}
			style={{ backgroundImage: `url(${image}` }}
		>
			<div className={styles.lockupWrapper}>{children}</div>
		</section>
	);
};

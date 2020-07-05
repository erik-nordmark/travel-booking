import React from 'react';

import { DarkButton } from 'components/Button/Button';
import styles from './Post.module.scss';

export const Post = ({ title, text, price, image }) => {
	return (
		<div className={styles.postWrapper}>
			<div
				className={styles.imageContainer}
				style={{ backgroundImage: `url(${image}` }}
			>
				<h3>{title}</h3>
			</div>
			<div className={styles.content}>
				<p>{text}</p>
				<p>From £{price} per person</p>
				<DarkButton label='Book experience' />
			</div>
		</div>
	);
};

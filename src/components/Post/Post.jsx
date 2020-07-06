import React from 'react';

import { DarkButton } from 'components/Button/Button';
import { Text } from 'components/Text/Text';
import { useHistory } from 'react-router-dom';
import styles from './Post.module.scss';

export const Post = ({ title, text, price, unit, image, id }) => {
	const history = useHistory();

	const goToBooking = () => {
		history.push(`/booking/${id}`);
	};

	return (
		<div className={styles.postWrapper}>
			<div
				className={styles.imageContainer}
				style={{ backgroundImage: `url(${image}` }}
			>
				<h3>{title}</h3>
			</div>
			<div className={styles.content}>
				<Text>{text}</Text>
				<p className={styles.price}>{`from ${price} ${unit}`}</p>
				<DarkButton label='Book experience' onClick={goToBooking} />
			</div>
		</div>
	);
};

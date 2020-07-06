import React from 'react';
import { LightButton } from 'components/Button/Button';
import { useHistory } from 'react-router-dom';
import styles from './Lockup.module.scss';

export const Lockup = ({ title, price, unit, isCarousel, id }) => {
	const history = useHistory();

	const goToBooking = () => {
		history.push(`/booking/${id}`);
	};

	return (
		<div className={styles.lockupWrapper}>
			<div className={styles.lockup}>
				<h2>{title}</h2>
				<p>{`from ${price} ${unit}`}</p>
				<LightButton
					full={isCarousel}
					label='Book experience'
					onClick={goToBooking}
				/>
			</div>
		</div>
	);
};

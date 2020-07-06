import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from 'contexts/CartContext';
import { DarkButton } from 'components/Button/Button';

import styles from './Booking.module.scss';

export const Booking = ({ title, price, unit }) => {
	const history = useHistory();

	const [adults, setAdults] = useState(0);
	const [children, setChildren] = useState(0);
	const [total, setTotal] = useState(0);

	const { updateCart } = useContext(CartContext);

	const addAdults = () => {
		setAdults((prevAdults) => prevAdults + 1);
	};

	const removeAdults = () => {
		setAdults((prevAdults) => {
			if (prevAdults > 0) {
				return prevAdults - 1;
			}

			return 0;
		});
	};

	const addChildren = () => {
		setChildren((prevAdults) => prevAdults + 1);
	};

	const removeChildren = () => {
		setChildren((prevChildren) => {
			if (prevChildren > 0) {
				return prevChildren - 1;
			}

			return 0;
		});
	};

	const bookExperience = () => {
		const booking = {
			name: title,
			adults,
			children,
			totalPrice: total,
		};

		updateCart((cart) => [...cart, booking]);
		history.push('/');
	};

	useEffect(() => {
		setTotal(adults * price + children * price);
	});

	return (
		<div className={styles.bookingWrapper}>
			<h3>{title}</h3>
			<p>{`from ${price} ${unit}`}</p>
			<p>Adult</p>
			<div className={styles.shopWrapper}>
				<button
					label='Remove adult'
					type='button'
					className={styles.remove}
					onClick={removeAdults}
				/>
				<input
					value={adults}
					onChange={(e) => setAdults(parseInt(e.currentTarget.value, 10))}
				/>
				<button
					label='Add adult'
					type='button'
					className={styles.add}
					onClick={addAdults}
				/>
			</div>

			<p>Children</p>
			<div className={styles.shopWrapper}>
				<button
					label='Remove children'
					type='button'
					className={styles.remove}
					onClick={removeChildren}
				/>
				<input
					value={children}
					onChange={(e) => setChildren(parseInt(e.currentTarget.value, 10))}
				/>
				<button
					label='Add children'
					type='button'
					className={styles.add}
					onClick={addChildren}
				/>
			</div>

			<p className={styles.total}>{`Total: £${total}`}</p>

			<DarkButton
				disabled={!adults && !children}
				label='Book experience'
				onClick={bookExperience}
			/>
		</div>
	);
};

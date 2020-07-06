import React, { useContext } from 'react';
import { CartContext } from 'contexts/CartContext';

import styles from './Cart.module.scss';

export const Cart = () => {
	const { cart } = useContext(CartContext);

	const getEmptyCart = () => (
		<div data-testid='cart' className={styles.empty} />
	);

	const getCartWithItems = () => (
		<div data-testid='cart' className={styles.full} />
	);

	return cart && cart.length > 0 ? getCartWithItems() : getEmptyCart();
};

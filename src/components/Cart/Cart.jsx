import React, { useContext } from 'react';
import { CartContext } from 'contexts/cartContext';

import styles from './Cart.module.scss';

export const Cart = () => {
	const { cart } = useContext(CartContext);

	const getEmptyCart = () => <div className={styles.empty} />;

	const getCartWithItems = () => <div className={styles.full} />;

	return cart.length === 0 ? getEmptyCart() : getCartWithItems();
};

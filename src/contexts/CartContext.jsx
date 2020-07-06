import React, { createContext, useState, useMemo } from 'react';

export const CartContext = createContext({});

export const CartConsumer = CartContext.Consumer;

export const CartProvider = ({ children }) => {
	const [cart, updateCart] = useState([]);

	const state = {
		cart,
		updateCart,
	};

	const providerValue = useMemo(() => state, [state]);

	return (
		<CartContext.Provider value={providerValue}>
			{children}
		</CartContext.Provider>
	);
};

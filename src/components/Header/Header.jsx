import React from 'react';
import styles from './Header.module.scss';

export const Header = ({ children }) => {
	return (
		<header>
			<div className={styles.headerWrapper}>
				<h1>Scandinavian Adventures</h1>
				{children}
			</div>
		</header>
	);
};

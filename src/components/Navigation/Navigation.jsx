import React from 'react';
import { Cart } from 'components/Cart/Cart';
import styles from './Navigation.module.scss';

export const Navigation = () => {
	return (
		<header>
			<div className={styles.navigationWrapper}>
				<h1>Scandinavian Adventures</h1>
				<nav>
					<ul>
						<li>Experiences</li>
						<li>Company</li>
						<li>Support</li>
						<li>
							<Cart />
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

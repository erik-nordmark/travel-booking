import React, { useState } from 'react';
import { Cart } from 'components/Cart/Cart';
import styles from './Navigation.module.scss';

export const Navigation = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<>
			<nav className={styles.desktopMenu}>
				<ul>
					<li>Experiences</li>
					<li>Company</li>
					<li>Support</li>
					<li>
						<Cart />
					</li>
				</ul>
			</nav>
			<div className={styles.mobileMenu}>
				<div
					className={styles.menuIconWrapper}
					onClick={() =>
						setShowMobileMenu((prevShowMobileMenu) => !prevShowMobileMenu)
					}
				>
					{showMobileMenu ? (
						<span className='closeButton' />
					) : (
						<>
							<span />
							<span />
							<span />
						</>
					)}
				</div>
			</div>
			<nav
				className={styles.mobileNavigation}
				style={{ display: showMobileMenu ? 'flex' : 'none' }}
			>
				<ul>
					<li>Experiences</li>
					<li>Company</li>
					<li>Support</li>
					<li>
						Booking <Cart />
					</li>
				</ul>
			</nav>
		</>
	);
};

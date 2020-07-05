import React from 'react';
import styles from './Button.module.scss';

const Colors = {
	DARK: Symbol('dark'),
	LIGHT: Symbol('light'),
};

const Button = ({ label, color, full }) => {
	return (
		<div
			data-testid='button'
			style={{ width: full ? '100%' : '' }}
			className={`${styles.button} ${
				color === Colors.DARK ? styles.dark : styles.light
			}`}
		>
			{label}
		</div>
	);
};

export const DarkButton = ({ label, full }) => {
	return <Button label={label} color={Colors.DARK} full={full} />;
};

export const LightButton = ({ label, full }) => {
	return <Button label={label} color={Colors.LIGHT} full={full} />;
};

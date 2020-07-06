import React from 'react';
import styles from './Button.module.scss';

const Colors = {
	DARK: Symbol('dark'),
	LIGHT: Symbol('light'),
};

const Button = ({ label, color, full, onClick, disabled }) => {
	return (
		<button
			type='button'
			disabled={disabled}
			data-testid='button'
			onClick={onClick}
			style={{ width: full ? '100%' : '' }}
			className={`${styles.button} ${
				color === Colors.DARK ? styles.dark : styles.light
			}`}
		>
			{label}
		</button>
	);
};

export const DarkButton = ({ label, full, onClick, disabled }) => {
	return (
		<Button
			label={label}
			color={Colors.DARK}
			full={full}
			onClick={onClick}
			disabled={disabled}
		/>
	);
};

export const LightButton = ({ label, full, onClick, disabled }) => {
	return (
		<Button
			label={label}
			color={Colors.LIGHT}
			full={full}
			onClick={onClick}
			disabled={disabled}
		/>
	);
};

import React from 'react';

import styles from './Text.module.scss';

export const Text = ({ children }) => {
	return <p className={styles.textStyle}>{children}</p>;
};

import React from 'react';
import { Post } from 'components/Post/Post';
import styles from './Main.module.scss';

export const Main = ({ featured }) => {
	return (
		<main>
			<div className={styles.mainGrid}>
				{featured &&
					featured.map((feature, index) => (
						<Post
							key={index.toString()}
							title={feature.title}
							text={feature.body}
							price={feature.price.value}
							unit={feature.price.unit}
							image={feature.media.large.url}
							id={feature.id}
						/>
					))}
			</div>
		</main>
	);
};

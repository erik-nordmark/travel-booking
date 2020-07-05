import React, { useEffect, useCallback, useContext } from 'react';
import { Post } from 'components/Post/Post';
import styles from './Main.module.scss';

// import post1image from '/images/post1.png';

export const Main = ({ featured }) => {
	return (
		<main>
			<div className={styles.mainGrid}>
				{featured &&
					featured.map((feature) => (
						<Post
							key={featured.id}
							title={feature.title}
							text={feature.body}
							price={feature.price.value}
							image={feature.media.large.url}
						/>
					))}
			</div>
		</main>
	);
};

import React, { useEffect, useContext, useState, useCallback } from 'react';
import { FeaturedContext } from 'contexts/FeaturedContext';
import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { Text } from 'components/Text/Text';
import { Booking } from 'components/Booking/Booking';
import { useParams, Link } from 'react-router-dom';

export const BookingPage = () => {
	const params = useParams();

	const [featured, setFeatured] = useState(null);

	const { getFeaturedById, isFeaturedLoading, featuredError } = useContext(
		FeaturedContext
	);

	const memoizeGetFeatured = useCallback(async () => {
		const item = await getFeaturedById(params.id);
		setFeatured(item);
	}, [featured]);

	useEffect(() => {
		memoizeGetFeatured();
	}, []);

	return (
		<>
			<Header>
				<Link to='/'>
					<span className='closeButton' />
				</Link>
			</Header>
			{!isFeaturedLoading && !featuredError && featured && (
				<div className='bookingPage'>
					<div className='bookingWrapper'>
						<Hero image={featured.media.large.url} />
						<Booking
							title={featured.title}
							price={featured.price.value}
							unit={featured.price.unit}
						/>
						<Text>{featured.body}</Text>
					</div>
				</div>
			)}
		</>
	);
};

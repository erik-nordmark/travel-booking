import React from 'react';
import { CartProvider } from 'contexts/cartContext';
import { FeaturedProvider } from 'contexts/featuredContext';
import { CarouselProvider } from 'contexts/carouselContext';
import { LandingPage } from './pages/LandingPage';
import './App.css';

function App() {
	return (
		<div className='App'>
			<CartProvider>
				<FeaturedProvider>
					<CarouselProvider>
						<LandingPage />
					</CarouselProvider>
				</FeaturedProvider>
			</CartProvider>
		</div>
	);
}

export default App;

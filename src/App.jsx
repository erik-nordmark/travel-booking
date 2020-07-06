import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'routes/Routes';
import { CartProvider } from 'contexts/CartContext';
import { FeaturedProvider } from 'contexts/FeaturedContext';
import { CarouselProvider } from 'contexts/CarouselContext';
import './App.css';

function App() {
	return (
		<Router>
			<div className='App'>
				<CartProvider>
					<FeaturedProvider>
						<CarouselProvider>
							<Routes />
						</CarouselProvider>
					</FeaturedProvider>
				</CartProvider>
			</div>
		</Router>
	);
}

export default App;

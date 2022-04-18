import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Cart from './page/Cart';
import Home from './page/Home';
import Erro404 from './page/mistakes/Erro404';

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<Erro404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

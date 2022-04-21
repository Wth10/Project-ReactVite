import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Product from './page/Product';
import Home from './page/Home';
import Erro404 from './mistakes/Erro404';

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
					<Route path="/" element={<Home />} />
					<Route path="product" element={<Product />} />
					<Route path="*" element={<Erro404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

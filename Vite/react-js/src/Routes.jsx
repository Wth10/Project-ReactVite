import React from 'react'
import { Route, Routes,BrowserRouter } from 'react-router-dom'

import Cart  from './pags/Cart';
import Home  from './pags/Home';


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path='/' element={<Home />} />
                    <Route path='Cart' element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
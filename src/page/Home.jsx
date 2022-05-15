import React from 'react';
import {useState} from 'react';
import Head from '../layout/Head';
import Blog from '../components/Blog';
import Footer from '../layout/Footer';

export default function Home() {
	return (
		<>
			<Head />
			<Blog />
			<Footer />
		</>
	);
}

function Contador() {
	const [count, setCount] = useState(0);
	return (
		<button type="button" onClick={() => setCount((count) => count + 1)}>
			count is: {count}
		</button>
	);
}

import React from 'react';

export default function Button(props) {
	return (
		<div>
			<button
				className="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
				onclick="modalHandler(true)"
			>
				Submit
			</button>
		</div>
	);
}

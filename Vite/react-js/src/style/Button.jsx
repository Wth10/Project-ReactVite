import React from 'react';

export default function Button(props) {
	return (
		<div>
			<button
				class="font-mono ml-2 text-white-400 rounded-lg text-center box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 border-resdus"
				type="submit"
				name={props.name}>
				Submit
			</button>
		</div>
	);
}

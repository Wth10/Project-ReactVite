import React from 'react'

function redi(){
	window.location = 'http://www.google.com.br';
}
export default function Button() {
    return (
		<div>
			<button class='font-mono ml-2 text-white-400 rounded-lg text-center box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 border-resdus' onClick={() => redi()} name='Btn-primary'>
				Submit
			</button>
		</div>
	);
}

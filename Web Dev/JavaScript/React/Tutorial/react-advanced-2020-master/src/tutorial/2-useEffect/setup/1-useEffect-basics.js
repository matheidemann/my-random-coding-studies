import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
	const appName = `Welcome to React App!`;
	const [value, setValue] = useState(0);

	useEffect(() => {
		document.title = appName;
	}, []);

	useEffect(() => {
		if (value >= 1) {
			document.title = `New Messages (${value})`;
		} else if (value == 0 && document.title != appName) {
			document.title = `React App`;
		}
	});

	return (
		<>
			<h2>New Messages: {value}</h2>
			<button
				className='btn'
				onClick={() => {
					setValue(value + 1);
				}}>
				click me
			</button>
			<button
				className='btn'
				onClick={() => {
					setValue(0);
				}}>
				clear messages
			</button>
		</>
	);
};

export default UseEffectBasics;

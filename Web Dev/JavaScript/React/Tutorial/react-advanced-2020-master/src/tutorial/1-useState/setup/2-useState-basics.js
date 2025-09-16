import React, { useState } from 'react';

const UseStateBasics = () => {
	const [text, setText] = useState('default title');

	const clickHandler = () => {
		if (text === 'default title') {
			setText('new title');
		} else {
			setText('default title');
		}
	};

	return (
		<React.Fragment>
			<h2>{text}</h2>
			<button className='btn' onClick={clickHandler}>
				change title
			</button>
		</React.Fragment>
	);
};

export default UseStateBasics;

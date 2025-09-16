import React, { useState, useEffect } from 'react';

const ShowHide = () => {
	const [show, setShow] = useState(false);

	return (
		<>
			<button className='btn' onClick={() => setShow(!show)}>
				{show ? 'hide' : 'show'}
			</button>
			{show && <Item />}
		</>
	);
};

const Item = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);

	const checkSize = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	useEffect(() => {
		window.addEventListener('resize', checkSize);
		return () => {
			window.removeEventListener('resize', checkSize);
		};
	}, []);

	return (
		<>
			<div style={{ marginTop: '2rem' }}>
				<h1>window</h1>
				<h3>width: {width}px</h3>
				<h3>height: {height}px</h3>
			</div>
		</>
	);
};

export default ShowHide;

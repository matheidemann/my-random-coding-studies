import React, { useState } from 'react';

const UseStateCounter = () => {
	const [value, setValue] = useState(0);

	const complexIncrease = () => {
		setTimeout(() => {
			setValue((prevState) => {
				return prevState + 1;
			});
		}, 2000);
	};

	const complexDecrease = () => {
		setTimeout(() => {
			setValue((prevState) => {
				return prevState - 1;
			});
		}, 2000);
	};

	return (
		<>
			<h2>complex counter</h2>
			<h2>{value}</h2>
			<button className='btn' onClick={complexDecrease}>
				decrease
			</button>
			<button className='btn' onClick={() => setValue(0)}>
				reset
			</button>
			<button className='btn' onClick={complexIncrease}>
				increase
			</button>
		</>
	);
};

export default UseStateCounter;

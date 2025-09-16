import React, { useState } from 'react';

const UseStateCounter = () => {
	const [value, setValue] = useState(0);

	return (
		<>
			<h2>simple counter</h2>
			<h2>{value}</h2>
			<button className='btn' onClick={() => setValue(value - 1)}>
				decrease
			</button>
			<button className='btn' onClick={() => setValue(0)}>
				reset
			</button>
			<button className='btn' onClick={() => setValue(value + 1)}>
				increase
			</button>
		</>
	);
};

export default UseStateCounter;

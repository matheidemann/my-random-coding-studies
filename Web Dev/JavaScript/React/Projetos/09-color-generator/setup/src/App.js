import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
	const [color, setColor] = useState('');
	const [error, setError] = useState(false);
	const [weightPercent, setWeightPercent] = useState(10);
	const [list, setList] = useState(new Values('#f15025').all(weightPercent));

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			let newColor = new Values(color).all(weightPercent);
			setError(false);
			setList(newColor);
			console.log(list);
		} catch (error) {
			setError(true);
		}
	};

	return (
		<>
			<section className='container'>
				<h3>color generator</h3>
				<form onSubmit={handleSubmit}>
					<span>COLOR</span>
					<input
						type='text'
						value={color}
						onChange={(e) => {
							setColor(e.target.value);
						}}
						placeholder='#f15025'
						className={`${error ? 'error' : 'null'}`}
					/>
					<span>WEIGHT</span>
					<input
						type='number'
						min='1'
						max='50'
						value={weightPercent}
						onChange={(e) => {
							setWeightPercent(parseInt(e.currentTarget.value));
						}}
					/>
					<button className='btn' type='submit'>
						submit
					</button>
				</form>
			</section>
			<section className='colors'>
				{list.map((colorProps, index) => {
					return (
						<SingleColor
							key={index}
							{...colorProps}
							index={index}
							hexColor={colorProps.hex}
						/>
					);
				})}
			</section>
		</>
	);
}

export default App;

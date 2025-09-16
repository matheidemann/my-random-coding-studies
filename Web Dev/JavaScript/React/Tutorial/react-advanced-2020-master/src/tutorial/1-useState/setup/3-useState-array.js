import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
	{
		/* USESTATE HOOK */
	}
	const [people, setPeople] = useState(data);

	{
		/* REMOVE SPECIFIC ITEM THAT MACTCHES THE ID */
	}
	const removeItem = (id) => {
		setPeople((currentPeople) => {
			const newPeople = currentPeople.filter((person) => person.id !== id);
			return newPeople;
		});
	};

	{
		/* MAIN RETURN */
	}
	return (
		<>
			<h2>Names</h2>
			{people.map((person) => {
				const { id, name } = person;
				return (
					<div key={id} className='item'>
						<h4>{name}</h4>
						<button onClick={() => removeItem(id)}>remove</button>
					</div>
				);
			})}

			{/* CLEAR ALL ITEMS */}
			<button className='btn' onClick={() => setPeople([])}>
				clear items
			</button>
		</>
	);
};

export default setPeople;
export default UseStateArray;

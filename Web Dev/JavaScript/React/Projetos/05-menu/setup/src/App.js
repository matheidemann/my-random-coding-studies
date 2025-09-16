import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
	const allCategories = ['all', ...new Set(items.map((item) => item.category))];
	const [itemsList, setItemsList] = useState(items);
	const [categoriesList, setCategoriesList] = useState(allCategories);

	console.log(categoriesList);

	const filterItemList = (filteredCategory) => {
		if (filteredCategory === 'all') {
			setItemsList(items);
		} else {
			const newItemList = items.filter(
				(item) => item.category === filteredCategory
			);
			setItemsList(newItemList);
		}
	};

	return (
		<>
			<main>
				<section className='menu section'>
					<div className='title'>
						<h2>our menu</h2>
						<div className='underline'></div>
					</div>
					<Categories
						categoriesList={categoriesList}
						filterItemList={filterItemList}
					/>
					<Menu itemsList={itemsList} />
				</section>
			</main>
		</>
	);
}

export default App;

import React from 'react';

const Categories = ({ filterItemList, categoriesList }) => {
	return (
		<div className='btn-container'>
			{categoriesList.map((category) => {
				return (
					<button
						className='filter-btn'
						type='button'
						onClick={() => filterItemList(category)}>
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default Categories;

import React from 'react';

const Menu = ({ itemsList }) => {
	return (
		<>
			<div className='section-center'>
				{itemsList.map((item) => {
					const { id, title, price, img, desc } = item;
					return (
						<article className='menu-item' key={id}>
							<img className='photo' src={img} alt={title} />
							<div className='item-info'>
								<header>
									<h4>{title}</h4>
									<h4 className='price'>${price}</h4>
								</header>
								<p className='item-text'>{desc}</p>
							</div>
						</article>
					);
				})}
			</div>
		</>
	);
};

export default Menu;

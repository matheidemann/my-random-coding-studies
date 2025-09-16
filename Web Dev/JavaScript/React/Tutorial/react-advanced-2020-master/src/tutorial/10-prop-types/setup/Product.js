import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ image, price, name }) => {
	const imgUrl = image && image.url;
	return (
		<article className='product'>
			<img src={imgUrl || defaultImage} alt='no image defined' />
			<h4>{name || 'no name defined'}</h4>
			<p>{price || 'no price defined'}</p>
		</article>
	);
};

export default Product;

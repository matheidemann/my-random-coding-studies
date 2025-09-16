import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../../9-custom-hooks/final/2-useFetch';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products';

// every time props or state changes, component re-renders

const Index = () => {
	const { products } = useFetch(url);
	const [count, setCount] = useState(0);
	const [cart, setCart] = useState(0);

	const addToCart = useCallback(() => {
		setCart(cart + 1);
	}, [cart]);

	const calculateMostExpensive = (data) => {
		console.log('hello');
		return (
			data.reduce((total, item) => {
				if (item.fields.price >= total) {
					total = item.fields.price;
				}
				return total;
			}, 0) / 100
		);
	};

	const newCalculateMostExpensive = useMemo(
		() => calculateMostExpensive(products),
		[products]
	);

	return (
		<>
			<h1>Count : {count}</h1>
			<button className='btn' onClick={() => setCount(count + 1)}>
				click me
			</button>
			<h1 style={{ marginTop: '3rem' }}>Cart : {cart}</h1>
			<h1 style={{ marginTop: '3rem' }}>
				Most Expensive : {newCalculateMostExpensive}
			</h1>
			<BigList products={products} addToCart={addToCart} />
		</>
	);
};

const BigList = React.memo(({ products, addToCart }) => {
	useEffect(() => {
		console.count('big list called');
	});

	return (
		<section className='products'>
			{products.map((product) => {
				return (
					<SingleProduct
						key={product.id}
						{...product}
						addToCart={addToCart}></SingleProduct>
				);
			})}
		</section>
	);
});

const SingleProduct = ({ fields, addToCart }) => {
	let { name, price } = fields;
	price = price / 100;
	const image = fields.image[0].url;

	useEffect(() => {
		console.count(`item called`);
	});

	return (
		<article className='product'>
			<img src={image} alt={name} />
			<h4>{name}</h4>
			<p>${price}</p>
			<button className='btn' onClick={addToCart}>
				add to cart
			</button>
		</article>
	);
};
export default Index;

//React.memo() checks if any values have been changed on the re-render, if they did not, after the re-render, the component will not be re-rendered
//every time a prop or state changes, re-render is triggered
//useCallback the components will only be re-rendered if the function change any values

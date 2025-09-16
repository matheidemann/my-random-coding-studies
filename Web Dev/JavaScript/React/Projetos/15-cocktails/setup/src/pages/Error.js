import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<section className='error-page section'>
			<div className='error-container'>
				<h1>Ops! It's a dead end...</h1>
				<Link to='/' className='btn btn-class-primary'>
					Back to homepage
				</Link>
			</div>
		</section>
	);
};

export default Error;

import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

function SlideTemplate({ personIndex, currentIndex, peopleLength, ...person }) {
	let slideClass = 'nextSlide';

	if (personIndex === currentIndex) {
		slideClass = 'activeSlide';
	}
	if (
		personIndex === currentIndex - 1 ||
		(currentIndex === 0 && personIndex === peopleLength - 1)
	) {
		slideClass = 'lastSlide';
	}

	const { image, name, title, quote } = person;
	return (
		<article className={slideClass} key={personIndex}>
			<img src={image} alt={name} className='person-img' />
			<h4>{name}</h4>
			<p className='title'>{title}</p>
			<p className='text'>{quote}</p>
			<FaQuoteRight />
		</article>
	);
}
export default SlideTemplate;

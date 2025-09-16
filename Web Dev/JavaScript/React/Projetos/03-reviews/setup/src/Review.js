import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
	const [index, setIndex] = useState(0);
	const { id, name, job, image, text } = people[index];

	//CHECK IF THE INDEX IS OUTSIDE THE ARRAY LENGTH
	const checkNumber = (index) => {
		if (index == people.length) {
			return 0;
		} else if (index <= 0) {
			return people.length - 1;
		} else {
			return index;
		}
	};

	//NEXT BTN
	const nextBtn = () => {
		setIndex((index) => {
			let newIndex = index + 1;
			return checkNumber(newIndex);
		});
	};

	//PREV BTN
	const prevBtn = () => {
		setIndex((index) => {
			let newIndex = index - 1;
			return checkNumber(newIndex);
		});
	};

	//SURPRISE BTN
	const surpriseBtn = () => {
		setIndex((index) => {
			let randomIndex = Math.floor(Math.random() * people.length);
			if (randomIndex == index) {
				randomIndex = index + 1;
			}
			return checkNumber(randomIndex);
		});
	};

	//MAIN RETURN
	return (
		<article className='review'>
			<div className='img-container'>
				<img className='person-img' src={image} alt={name} />
				<span className='quote-icon'>
					<FaQuoteRight />
				</span>
			</div>
			<h4 className='author'>{name}</h4>
			<p className='job'>{job}</p>
			<p className='info'>{text}</p>
			<div className='button-container'>
				<button className='prev-btn' onClick={() => prevBtn()}>
					<FaChevronLeft />
				</button>
				<button className='next-btn' onClick={() => nextBtn()}>
					<FaChevronRight />
				</button>
			</div>
			<button className='random-btn' onClick={() => surpriseBtn()}>
				surprise me
			</button>
		</article>
	);
};

export default Review;

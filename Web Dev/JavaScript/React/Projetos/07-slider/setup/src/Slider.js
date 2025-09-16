import React, { useState, useEffect } from 'react';
import data from './data';
import Slidetemplate from './SlideTemplate';
import Buttons from './Buttons';

function Slider() {
	const [people, setPeople] = useState(data);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (index < 0) {
			setIndex(people.length - 1);
		}
		if (index > people.length - 1) {
			setIndex(0);
		}
	}, [index, people]);

	useEffect(() => {
		let autoplay = setInterval(() => {
			setIndex(index + 1);
		}, 3000);
		return () => {
			clearInterval(autoplay);
		};
	}, [index]);

	return (
		<div className='section-center'>
			{people.map((person, personIndex) => {
				return (
					<Slidetemplate
						key={personIndex}
						personIndex={personIndex}
						currentIndex={index}
						peopleLength={people.length}
						{...person}
					/>
				);
			})}
			<Buttons setIndex={setIndex} currentIndex={index} />
		</div>
	);
}
export default Slider;

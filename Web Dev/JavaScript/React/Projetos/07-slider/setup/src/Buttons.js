import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

function Buttons({ setIndex, currentIndex }) {
	return (
		<>
			<button className='prev' onClick={() => setIndex(currentIndex - 1)}>
				<FiChevronLeft />
			</button>
			<button className='next' onClick={() => setIndex(currentIndex + 1)}>
				<FiChevronRight />
			</button>
		</>
	);
}
export default Buttons;

import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
	//USESTATE HOOKS
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	//FILTER TOURS
	const removeTour = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	};

	//DATA FETCH
	const fetchData = async () => {
		try {
			const response = await fetch(url);
			const tours = await response.json();
			setLoading(false);
			setTours(tours);
		} catch (error) {
			console.log('network error');
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	//MAIN RETURN

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}
	if (tours.length === 0) {
		return (
			<main>
				<div className='title'>
					<h2>no tours left</h2>
					<div className='underline'></div>
					<button className='btn' onClick={fetchData}>
						click to refresh
					</button>
				</div>
			</main>
		);
	}
	if (!loading) {
		return (
			<main>
				<Tours tours={tours} removeTour={removeTour} />
			</main>
		);
	}
}

export default App;

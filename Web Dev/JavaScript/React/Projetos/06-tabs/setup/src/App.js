import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [value, setValue] = useState(0);

	const fetchData = async () => {
		const response = await fetch(url);
		const newJobs = await response.json();
		setJobs(newJobs);
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (loading) {
		return (
			<>
				<section className='section'>
					<div className='title'>
						<h2>loading...</h2>
					</div>
				</section>
			</>
		);
	}

	const { company, dates, duties, title } = jobs[value];
	return (
		<>
			<section className='section'>
				<div className='title'>
					<h2>experience</h2>
					<div className='underline'></div>
				</div>
				<div className='jobs-center'>
					<div className='btn-container'>
						{jobs.map((item, index) => {
							return (
								<button
									type='button'
									key={index}
									onClick={() => setValue(index)}
									className={`job-btn ${index === value && 'active-btn'}`}>
									{item.company}
								</button>
							);
						})}
					</div>

					<article className='job-info'>
						<h3>{title}</h3>
						<h4>{company}</h4>
						<p className='job-date'>{dates}</p>
						{duties.map((duty) => {
							return (
								<>
									<job className='job-desc'>
										<FaAngleDoubleRight className='job-icon' />
										<p>{duty}</p>
									</job>
								</>
							);
						})}
					</article>
				</div>
				<button className='btn' type='button'>
					more info
				</button>
			</section>
		</>
	);
}

export default App;
/* I tried placing the "setLoading" after the "fetchData" inside the useEffect Hook, but by doing that my React App crashed. Why did this happen? */

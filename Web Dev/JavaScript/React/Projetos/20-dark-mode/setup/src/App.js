import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

const getStorageTheme = () => {
	let storageTheme = 'light-theme';
	if (localStorage.getItem('storageTheme')) {
		storageTheme = localStorage.getItem('storageTheme');
	}
	return storageTheme;
};

function App() {
	const [theme, setTheme] = useState(getStorageTheme());

	const toggleTheme = () => {
		if (theme === 'light-theme') {
			setTheme('dark-theme');
		} else if (theme === 'dark-theme') {
			setTheme('light-theme');
		}
	};

	useEffect(() => {
		document.documentElement.className = theme;
		localStorage.setItem('storageTheme', theme);
	}, [theme]);

	return (
		<main>
			<nav>
				<div className='nav-center'>
					<h1>Overreacted</h1>
					<button className='btn' onClick={toggleTheme}>
						toggle theme
					</button>
				</div>
			</nav>
			<section className='articles'>
				{data.map((item) => {
					return <Article key={item.id} {...item} />;
				})}
			</section>
		</main>
	);
}

export default App;

import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import Photo from './Photo';
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
	const [loading, setLoading] = useState(false);
	const [photos, setPhotos] = useState([]);
	const [page, setPage] = useState(1);
	const [query, setQuery] = useState('');
	const [newImages, setNewImages] = useState(false);
	const mounted = useRef(false);

	useEffect(() => {
		window.addEventListener('scroll', event);
		return () => window.removeEventListener('scroll', event);
	}, []);

	useEffect(() => {
		fetchImages();
		// eslint-disable-next-line
	}, [page]);

	useEffect(() => {
		if (!mounted.current) {
			mounted.current = true;
			return;
		}
		if (!newImages) return;
		if (loading) return;
		setPage((oldPage) => {
			return oldPage + 1;
		});
	}, [newImages]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!query) {
			return;
		}
		if (page === 1) {
			fetchImages();
			return;
		}
		setPage(1);
	};

	const event = () => {
		if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
			setNewImages(true);
		}
	};

	const fetchImages = async () => {
		setLoading(true);
		const urlPage = `&page=${page}`;
		const urlQuery = `&query=${query}`;
		let url;
		if (!query) {
			url = `${mainUrl}${clientID}${urlPage}`;
		} else {
			url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
		}
		try {
			const response = await fetch(url);
			const data = await response.json();
			setPhotos((oldPhotos) => {
				if (!query) {
					return [...oldPhotos, ...data];
				} else if (query && page === 1) {
					return data.results;
				} else if (query) {
					return [...oldPhotos, ...data.results];
				}
			});
			setNewImages(false);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main>
			<section className='search'>
				<form className='search-form'>
					<input
						type='text'
						placeholder='search'
						className='form-input'
						onChange={(e) => {
							setQuery(e.target.value);
						}}
					/>
					<button type='submit' className='submit-btn' onClick={handleSubmit}>
						<FaSearch />
					</button>
				</form>
			</section>
			<section className='photos'>
				<div className='photos-center'>
					{photos.map((photo) => {
						return <Photo key={photo.id} {...photo} />;
					})}
				</div>
				{loading && <h2 className='loading'>Loading...</h2>}
			</section>
		</main>
	);
}

export default App;

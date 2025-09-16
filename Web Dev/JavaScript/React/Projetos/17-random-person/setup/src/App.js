import React, { useState, useEffect } from 'react';
import {
	FaEnvelopeOpen,
	FaUser,
	FaCalendarTimes,
	FaMap,
	FaPhone,
	FaLock,
} from 'react-icons/fa';

function App() {
	const url = 'https://randomuser.me/api/';
	const defaultImage = 'https://xbzbrindes.com.br/img/loading.gif';
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState({});
	const [title, setTitle] = useState('name');
	const [value, setValue] = useState();
	const [tempTitle, setTempTitle] = useState();

	const handleValue = (e) => {
		if (e.target.classList.contains('icon')) {
			const label = e.target.dataset.label;
			setTempTitle(label);
			setTitle(label);
			setValue(user[label]);
		}
	};

	const fetchNewUser = async () => {
		setLoading(true);
		const response = await fetch(url);
		const data = await response.json();
		const person = data.results[0];

		const { first, last } = person.name;
		const { email, phone } = person;
		const { age } = person.dob;
		const { number, name } = person.location.street;
		const { password } = person.login;
		const { large: image } = person.picture;

		const newPerson = {
			name: `${first} ${last}`,
			age: age,
			email: email,
			phone: phone,
			location: `${number} ${name}`,
			password: password,
			pic: image,
		};

		setUser(newPerson);
		if (tempTitle) {
			setTitle(tempTitle);
			setValue(newPerson[tempTitle]);
		} else {
			setValue(newPerson.name);
			setTitle('name');
		}
		setLoading(false);
	};

	useEffect(() => {
		setLoading(true);
		fetchNewUser();
	}, []);

	return (
		<main>
			<div className='block bcg-black'></div>
			<div className='block'>
				<div className='container'>
					<img
						src={loading ? defaultImage : user.pic}
						alt=''
						className='user-img'
					/>
					<p className='user-title'>{loading ? ' ' : `My ${title} is`}</p>
					<p className='user-value'>{loading ? 'Loading...' : value}</p>
					<div className='values-list'>
						<button
							className='icon'
							data-label='name'
							onMouseOver={handleValue}>
							<FaUser />
						</button>
						<button
							className='icon'
							data-label='email'
							onMouseOver={handleValue}>
							<FaEnvelopeOpen />
						</button>
						<button className='icon' data-label='age' onMouseOver={handleValue}>
							<FaCalendarTimes />
						</button>
						<button
							className='icon'
							data-label='location'
							onMouseOver={handleValue}>
							<FaMap />
						</button>
						<button
							className='icon'
							data-label='phone'
							onMouseOver={handleValue}>
							<FaPhone />
						</button>
						<button
							className='icon'
							data-label='password'
							onMouseOver={handleValue}>
							<FaLock />
						</button>
					</div>
					<button className='btn' onClick={fetchNewUser}>
						{loading ? 'loading...' : 'random user'}
					</button>
				</div>
			</div>
		</main>
	);
}

export default App;

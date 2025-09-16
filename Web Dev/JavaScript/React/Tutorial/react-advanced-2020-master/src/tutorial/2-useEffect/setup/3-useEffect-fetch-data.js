import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
	const [users, setUsers] = useState([]);

	const getGithubUsers = async () => {
		const response = await fetch(url);
		const users = await response.json();
		setUsers(users);
	};

	useEffect(() => {
		getGithubUsers();
	}, []);

	return (
		<>
			<h3>Hitbuh users</h3>
			<ul className='users'>
				{users.map((user) => {
					const { id, avatar_url, login, html_url } = user;
					return (
						<li key={id}>
							<img src={avatar_url} alt={login} />
							<div>
								<h4>{login}</h4>
								<a href={html_url}>profile</a>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default UseEffectFetchData;

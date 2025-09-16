import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';
import Followers from '../components/Followers';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
	const [githubUser, setGithubUser] = useState(mockUser);
	const [repos, setRepos] = useState(mockRepos);
	const [followers, setFollowers] = useState(mockFollowers);

	//request
	const [requests, setRequests] = useState(0);
	const [loading, setLoading] = useState(false);

	//error
	const [error, setError] = useState({ show: false, msg: '' });
	const toggleError = (show, msg) => {
		setError({ show, msg });
	};

	//search github user
	const searchGithubUser = async (user) => {
		setLoading(true);
		const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
			console.log(err)
		);
		if (response) {
			//userdata
			setGithubUser(response.data);

			//data for repos and followers
			const { login, followers_url } = response.data;
			await Promise.allSettled([
				axios(`${rootUrl}/users/${login}/repos?per_page=100`),
				axios(`${followers_url}?per_page=100`),
			])
				.then((results) => {
					const [repos, following] = results;
					if (repos.status === 'fulfilled') {
						setRepos(repos.value.data);
					}
					if (following.status === 'fulfilled') {
						setFollowers(following.value.data);
					}
				})
				.catch((err) => console.log(err));
		} else {
			toggleError(true, 'There is no user with that username');
		}
		checkRequest();
		toggleError();
		setLoading(false);
		//asd
	};

	//check rate
	const checkRequest = () => {
		axios(`${rootUrl}/rate_limit`)
			.then(({ data }) => {
				let {
					rate: { remaining },
				} = data;
				setRequests(remaining);
				if (remaining === 0) {
					toggleError(true, 'sorry, you have exceded your hourly rate limit');
				} else {
				}
			})

			.catch((err) => console.log(err));
	};

	//error
	useEffect(checkRequest, []);

	return (
		<GithubContext.Provider
			value={{
				githubUser,
				repos,
				followers,
				requests,
				error,
				loading,
				searchGithubUser,
			}}>
			{children}
		</GithubContext.Provider>
	);
};

export { GithubProvider, GithubContext };

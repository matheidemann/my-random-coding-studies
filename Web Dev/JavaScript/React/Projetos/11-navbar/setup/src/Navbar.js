import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
	const [isNavbarShow, setisNavbarShow] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);

	const hideMenu = () => {
		if (window.innerWidth > 800) {
			setisNavbarShow(false);
		}
	};

	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		if (isNavbarShow === true) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = `0px`;
		}
	}, [isNavbarShow]);

	useEffect(() => {
		window.addEventListener('resize', hideMenu);
		return () => {
			window.removeEventListener('resize', hideMenu);
		};
	});

	return (
		<div className='nav-center'>
			<div className='nav-header'>
				<img src={logo} alt='logo' />
				<button
					className='nav-toggle'
					onClick={() => setisNavbarShow(!isNavbarShow)}>
					<FaBars />
				</button>
			</div>
			<div className={'links-container'} ref={linksContainerRef}>
				<ul className='links' ref={linksRef}>
					{links.map((link) => {
						const { id, url, text } = link;
						return (
							<li key={id}>
								<a href={`#${url}`}>{text}</a>
							</li>
						);
					})}
				</ul>
			</div>
			<ul className='social-icons'>
				{social.map((socialmedia) => {
					const { id, url, icon } = socialmedia;
					return (
						<li key={id}>
							<a href={url}>{icon}</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Navbar;

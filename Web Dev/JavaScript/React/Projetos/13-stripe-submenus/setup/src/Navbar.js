import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
	const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
	const displaySubmenu = (e) => {
		const page = e.target.textContent;
		const tempBtn = e.target.getBoundingClientRect();
		const tempBtnCenter = (tempBtn.left + tempBtn.right) / 2;
		const tempBtnBottom = tempBtn.bottom - 3;

		openSubmenu(page, { tempBtnCenter, tempBtnBottom });
	};

	const handleSubmenu = (e) => {
		if (!e.target.classList.contains('link-btn')) {
			closeSubmenu();
		}
	};

	return (
		<nav className='nav' onMouseOver={handleSubmenu}>
			<div className='nav-center'>
				<div className='nav-header'>
					<img className='nav-logo' src={logo} alt='stripe' />
					<button className='btn toggle-btn' onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className='nav-links'>
					<li>
						<button className='link-btn' onMouseOver={displaySubmenu}>
							products
						</button>
					</li>
					<li>
						<button className='link-btn' onMouseOver={displaySubmenu}>
							developers
						</button>
					</li>
					<li>
						<button className='link-btn' onMouseOver={displaySubmenu}>
							company
						</button>
					</li>
				</ul>
				<button className='btn signin-btn'>Sign in</button>
			</div>
		</nav>
	);
};

export default Navbar;

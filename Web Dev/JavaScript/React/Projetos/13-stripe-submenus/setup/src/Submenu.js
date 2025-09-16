import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
	const {
		isSubmenuOpen,
		location,
		currentPage: { page, links },
	} = useGlobalContext();

	const container = useRef(null);

	const [columns, setColumns] = useState('col-2');

	useEffect(() => {
		setColumns('col-2');
		const { tempBtnCenter, tempBtnBottom } = location;
		const submenu = container.current;
		submenu.style.left = `${tempBtnCenter}px`;
		submenu.style.top = `${tempBtnBottom}px`;

		if (links.length === 3) {
			setColumns('col-3');
		}
		if (links.length > 3) {
			setColumns('col-4');
		}
	}, [location]);

	return (
		<aside
			className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
			ref={container}>
			<h4>{page}</h4>
			<div className={`submenu-center ${columns}`}>
				{links.map((link, index) => {
					const { label, icon, url } = link;
					return (
						<a key={index} href={url}>
							{icon}
							{label}
						</a>
					);
				})}
			</div>
		</aside>
	);
};
export default Submenu;

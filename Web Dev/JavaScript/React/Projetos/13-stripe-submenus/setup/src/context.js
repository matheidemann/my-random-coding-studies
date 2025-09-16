import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setisSidbarOpen] = useState(false);
	const [isSubmenuOpen, setisSubmenuOpen] = useState(false);
	const [location, setLocation] = useState({});
	const [currentPage, setCurrentPage] = useState({ page: '', links: [] });

	const openSidebar = () => {
		setisSidbarOpen(true);
	};
	const closeSidebar = () => {
		setisSidbarOpen(false);
	};
	const openSubmenu = (text, cords) => {
		const page = sublinks.find((sublink) => sublink.page === text);
		setCurrentPage(page);
		setLocation(cords);
		setisSubmenuOpen(true);
	};
	const closeSubmenu = () => {
		setisSubmenuOpen(false);
	};

	const closeSubmenuBigScreen = () => {
		if (window.innerWidth > 800) {
			setisSidbarOpen(false);
		}
	};

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				openSidebar,
				closeSidebar,
				isSubmenuOpen,
				openSubmenu,
				closeSubmenu,
				closeSubmenuBigScreen,
				location,
				currentPage,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider };

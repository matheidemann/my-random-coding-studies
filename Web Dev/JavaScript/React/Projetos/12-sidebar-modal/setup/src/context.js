import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setisSidebarOpen] = useState(false);
	const [isModalOpen, setisModalOpen] = useState(false);

	const showSidebar = () => {
		setisSidebarOpen(true);
	};

	const hideSidebar = () => {
		setisSidebarOpen(false);
	};
	const showModal = () => {
		setisModalOpen(true);
	};

	const hideModal = () => {
		setisModalOpen(false);
	};

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				showSidebar,
				isModalOpen,
				hideSidebar,
				showModal,
				hideModal,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider };

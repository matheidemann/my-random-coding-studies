import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
	loading: false,
	cart: [],
	total: 0,
	amount: 0,
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const clearCart = () => {
		dispatch({ type: 'CLEAR_CART' });
	};

	const removeSingleItem = (id) => {
		dispatch({ type: 'REMOVE_SINGLE_ITEM', payload: id });
	};

	const toggleAmount = (id, amountChange) => {
		dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, amountChange } });
	};

	const fetchData = async () => {
		dispatch({ type: 'LOADING' });
		const response = await fetch(url);
		const cart = await response.json();
		dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		dispatch({ type: 'GET_TOTALS' });
	}, [state.cart]);

	return (
		<AppContext.Provider
			value={{
				...state,
				clearCart,
				removeSingleItem,
				toggleAmount,
			}}>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };

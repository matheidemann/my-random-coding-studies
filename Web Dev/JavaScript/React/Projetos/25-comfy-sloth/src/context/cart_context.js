import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/cart_reducer';
import {
	ADD_TO_CART,
	REMOVE_CART_ITEM,
	TOGGLE_CART_ITEM_AMOUNT,
	CLEAR_CART,
	COUNT_CART_TOTALS,
} from '../actions';

const getLocalStorage = () => {
	let cart = localStorage.getItem('cart');
	if (cart) {
		return JSON.parse(localStorage.getItem('cart'));
	} else {
		return [];
	}
};

const initialState = {
	cart: getLocalStorage(),
	total_items: 0,
	total_amount: 0,
	shipping_fee: 534,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
	const [state, disptach] = useReducer(reducer, initialState);

	const addToCart = (id, color, amount, product) => {
		disptach({ type: ADD_TO_CART, payload: { id, color, amount, product } });
	};

	const removeFromCart = (id) => {
		disptach({ type: REMOVE_CART_ITEM, payload: id });
	};
	const clearCart = () => {
		disptach({ type: CLEAR_CART });
	};

	const toggleAmount = (id, value) => {
		disptach({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
	};

	useEffect(() => {
		disptach({ type: COUNT_CART_TOTALS });
		localStorage.setItem('cart', JSON.stringify(state.cart));
	}, [state.cart]);

	return (
		<CartContext.Provider
			value={{ ...state, addToCart, removeFromCart, clearCart, toggleAmount }}>
			{children}
		</CartContext.Provider>
	);
};
// make sure use
export const useCartContext = () => {
	return useContext(CartContext);
};

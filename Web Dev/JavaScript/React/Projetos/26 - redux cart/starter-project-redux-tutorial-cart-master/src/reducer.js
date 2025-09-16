import { REMOVE, CLEAR_CART, GET_TOTALS, TOGGLE_AMOUNT } from './actions';
import cartItems from './cart-items';

const initalStore = { cart: cartItems, total: 0, amount: 0 };

const reducer = (state = initalStore, action) => {
	let tempCart = [];
	switch (action.type) {
		case REMOVE:
			return {
				...state,
				cart: state.cart.filter((item) => {
					return item.id !== action.payload.id;
				}),
			};

		case GET_TOTALS:
			let { total, amount } = state.cart.reduce(
				(cartTotal, cartItem) => {
					const { price, amount } = cartItem;
					const itemTotal = price * amount;
					cartTotal.amount += amount;
					cartTotal.total += itemTotal;
					return cartTotal;
				},
				{
					total: 0,
					amount: 0,
				}
			);
			total = total.toFixed(2);
			return { ...state, total, amount };

		case TOGGLE_AMOUNT:
			tempCart = state.cart.map((item) => {
				if (item.id === action.payload.id) {
					if (action.payload.toggle === 'inc') {
						item = { ...item, amount: item.amount + 1 };
					}
					if (action.payload.toggle === 'dec') {
						item = { ...item, amount: item.amount - 1 };
					}
				}
				return item;
			});
			return { ...state, cart: tempCart };

		case CLEAR_CART:
			return { ...state, cart: [] };
		default:
			break;
	}
	return state;
};

export default reducer;

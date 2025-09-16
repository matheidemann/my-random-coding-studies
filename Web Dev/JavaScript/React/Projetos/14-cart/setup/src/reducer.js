const reducer = (state, action) => {
	if (action.type === 'CLEAR_CART') {
		return { ...state, cart: [] };
	}

	if (action.type === 'REMOVE_SINGLE_ITEM') {
		const newCart = state.cart.filter(
			(cartItem) => cartItem.id !== action.payload
		);
		return { ...state, cart: newCart };
	}

	if (action.type === 'TOGGLE_AMOUNT') {
		const newCart = state.cart
			.map((cartItem) => {
				if (cartItem.id === action.payload.id) {
					if (action.payload.amountChange === 'INCREASE') {
						return { ...cartItem, amount: cartItem.amount + 1 };
					}
					if (action.payload.amountChange === 'DECREASE') {
						return { ...cartItem, amount: cartItem.amount - 1 };
					}
				}
				return cartItem;
			})
			.filter((cartItem) => cartItem.amount !== 0);
		return { ...state, cart: newCart };
	}

	if (action.type === 'GET_TOTALS') {
		let { totalPrice, totalAmount } = state.cart.reduce(
			(cartTotal, cartItem) => {
				const { price, amount } = cartItem;
				const itemTotalPrice = price * amount;
				cartTotal.totalAmount += amount;
				cartTotal.totalPrice += itemTotalPrice;

				return cartTotal;
			},
			{
				totalPrice: 0,
				totalAmount: 0,
			}
		);
		totalPrice = parseFloat(totalPrice.toFixed(2));
		return { ...state, totalPrice, totalAmount };
	}

	if (action.type === 'LOADING') {
		return { ...state, loading: true };
	}

	if (action.type === 'DISPLAY_ITEMS') {
		return { ...state, cart: action.payload, loading: false };
	}
	//cartTotal é um objeto com o "totalPrice" e o "totalAmount"
	//cartItem é o item que está sendo afetado pela iteração do state.cart
	//{price, amount} estão sendo destruturadas do cartItem
	//itemTotalPrice está pegando os valores {price, amount} do cartItem
	//cartTotal.totalAmount está adicionado a quantidade de {amount} do cartItem, e ele faz isso em todos os cartItem iterados
	//return cartTotal é o retorno do objeto com o "totalPrice" e o "totalAmount"
	throw new Error('no matching action type');
};

export default reducer;

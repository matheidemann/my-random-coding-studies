import React from 'react';

// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import reducer from './reducer';
// items

// redux stuff
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//reducer

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
	// cart setup

	return (
		<Provider store={store}>
			<Navbar />
			<CartContainer />
		</Provider>
	);
}

export default App;

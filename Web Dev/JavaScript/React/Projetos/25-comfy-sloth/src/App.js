import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import styled from 'styled-components';
import {
	Home,
	SingleProductPage,
	CartPage,
	CheckoutPage,
	ErrorPage,
	AboutPage,
	ProductsPage,
	PrivateRoute,
} from './pages/index';

function App() {
	return (
		<Router>
			<Navbar></Navbar>
			<Sidebar></Sidebar>
			<Switch>
				<Route exact path='/'>
					<Home></Home>
				</Route>
				<Route exact path='/about'>
					<AboutPage></AboutPage>
				</Route>
				<Route exact path='/cart'>
					<CartPage></CartPage>
				</Route>
				<Route exact path='/products'>
					<ProductsPage></ProductsPage>
				</Route>
				<Route exact path='/products/:id' children={<SingleProductPage />}>
					<SingleProductPage></SingleProductPage>
				</Route>
				<Route exact path='/checkout'>
					<CheckoutPage></CheckoutPage>
				</Route>
				<Route path='*'>
					<ErrorPage></ErrorPage>
				</Route>
			</Switch>
			<Footer></Footer>
		</Router>
	);
}

export default App;

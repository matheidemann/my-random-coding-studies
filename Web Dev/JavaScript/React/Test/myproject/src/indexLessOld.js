import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import bookValues from './data.js';

// ONLY FOR EXAMPLE NAMES
const names = ['peter', 'guga', 'tufo'];
const newNames = names.map((name) => {
	return <h4>{name}</h4>;
});

// APP
const BookList = () => {
	return (
		<>
			<section className='booklist'>
				{bookValues.map((book) => {
					return <Book key={book.id} book={book} />;
				})}
			</section>
		</>
	);
};

const Book = (props) => {
	const { img, title, author } = props.book;
	return (
		<>
			<article className='book'>
				<img className='image' src={img} alt='' />
				<h2 className='title'>{title}</h2>
				<h4 className='author'>{author}</h4>
			</article>
		</>
	);
};

ReactDOM.render(<BookList />, document.getElementById('root'));

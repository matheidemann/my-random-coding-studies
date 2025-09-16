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
					return <Book key={book.id} {...book} />;
				})}
			</section>
		</>
	);
};

const clickHandler1 = (author) => {
	alert(author);
};

const clickHandler2 = (e) => {
	console.log(e.target);
};

const Book = (props) => {
	const { img, title, author } = props;
	return (
		<>
			<article
				className='book'
				onMouseOver={() => {
					console.log(title);
				}}>
				<img className='image' src={img} alt='' />
				<h2 className='title'>{title}</h2>
				<h4 className='author'>{author}</h4>
				<button type='button' onClick={() => clickHandler1(author)}>
					Button1
				</button>
				<button type='button' onClick={clickHandler2}>
					Button2
				</button>
			</article>
		</>
	);
};

ReactDOM.render(<BookList />, document.getElementById('root'));

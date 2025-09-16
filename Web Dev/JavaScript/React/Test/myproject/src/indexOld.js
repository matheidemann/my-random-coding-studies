import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import bookValues from './data.js';

const firstBook = {
	title: 'Misty the Cloud: A Very Stormy Day',
	author: 'Dylan Dreyer',
	img: 'https://images-na.ssl-images-amazon.com/images/I/91zuJm0MF2L._AC_UL200_SR200,200_.jpg',
};

const secondBook = {
	title: 'If Animals Kissed Good Night',
	author: 'Ann Whitford Paul',
	img: 'https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg',
};

const thirdBook = {
	title: 'I Love You to the Moon and Back',
	author: 'Amelia Hepworth',
	img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
};

const BookList = () => {
	return (
		<>
			<section className='booklist'>
				<Book
					title={firstBook.title}
					author={firstBook.author}
					img={firstBook.img}>
					<p>
						Eu sou o Children! Olhe onde estou inserido no código: estou dentro
						do componente Book, e não no local das propriedades, que fica após o
						nome Book, é como se eu estivesse onde o conteúdo de uma tag HTML
						iria, e não na parte dos atributos, onde os props estão.
					</p>
				</Book>
				<Book
					title={secondBook.title}
					author={secondBook.author}
					img={secondBook.img}
				/>
				<Book
					title={thirdBook.title}
					author={thirdBook.author}
					img={thirdBook.img}
				/>
			</section>
		</>
	);
};

const Book = ({ img, title, author, children }) => {
	//IT'S DESTRUCTURING THE PROPS UP BELLOW
	// const { img, title, author } = props; <- you can destructure this way aswell
	return (
		<>
			<article className='book'>
				<img className='image' src={img} alt='' />
				<h2 className='title'>{title}</h2>
				<h4 className='author'>{author}</h4>
				{children}
			</article>
		</>
	);
};

ReactDOM.render(<BookList />, document.getElementById('root'));

import React from 'react';
import { useGlobalContext } from './context';

const SetupForm = () => {
	const { error, quiz, handleChange, handleSubmit } = useGlobalContext();
	return (
		<main>
			<section className='quiz quiz-small'>
				<form className='setup-form'>
					<h2>setup quiz</h2>
					{/* {amount} */}
					<div className='form-control'>
						<label htmlFor='amount'>questions</label>
						<input
							type='number'
							name='amount'
							id='amount'
							value={quiz.amount}
							onChange={handleChange}
							className='form-input'
							min={1}
							max={30}
						/>
					</div>
					{/* {category} */}
					<div className='form-control'>
						<label htmlFor='category'>category</label>
						<select
							name='category'
							id='category'
							value={quiz.category}
							onChange={handleChange}
							className='form-input'>
							<option value='sports'>Sports</option>
							<option value='history'>History</option>
							<option value='politics'>Politics</option>
						</select>
					</div>
					{/* {difficulty} */}
					<div className='form-control'>
						<label htmlFor='difficulty'>Difficulty</label>
						<select
							name='difficulty'
							id='difficulty'
							value={quiz.difficulty}
							onChange={handleChange}
							className='form-input'>
							<option value='easy'>Easy</option>
							<option value='medium'>Medium</option>
							<option value='hard'>Hard</option>
						</select>
					</div>
					{error && (
						<p className='error'>
							can't generate questions, way to many questions
						</p>
					)}
					<button type='submit' onClick={handleSubmit} className='submit-btn'>
						start
					</button>
				</form>
			</section>
		</main>
	);
};

export default SetupForm;

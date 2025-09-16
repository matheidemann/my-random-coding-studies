import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	// const firstValue = text || 'hello world';
	// const secondValue = text && 'hello world';

	const [text, setText] = useState('');
	const [IsError, setIsError] = useState(false);

	return (
		<>
			<h2>{text || 'hello world 1'}</h2>{' '}
			{/* MOSTRA O TEXTO PADRÃO, MAS SE FOR FALSO, MOSTRA O OUTRO TEXTO */}
			<h2>{text && 'hello world 2'}</h2>{' '}
			{/* MOSTRA O OUTRO TEXTO, CASO O TEXTO PADRÃO NÃO SEJA FALSO */}
			<h2>{!text && 'hello world 3'}</h2>{' '}
			{/* A MESMA COISA QUE O DE CIMA, MAS AO CONTRÁRIO */}
			<button className='btn' onClick={() => setIsError(!IsError)}>
				toggle error
			</button>
			{IsError ? <h2>Error found</h2> : <h2>No errors found</h2>}
		</>
	);
};

export default ShortCircuit;

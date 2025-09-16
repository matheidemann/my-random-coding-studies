import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
	const [markdown, setMarkdown] = useState();

	return (
		<section className='markdown'>
			<textarea
				className='input'
				value={markdown}
				onChange={(e) => setMarkdown(e.target.value)}></textarea>
			<article className='result'>
				<ReactMarkdown children={markdown} />
			</article>
		</section>
	);
}

export default App;

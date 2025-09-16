import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
	const { isLoading, hits, removeStory } = useGlobalContext();
	if (isLoading) {
		return <div className='loading'></div>;
	}
	return (
		<section className='stories'>
			{hits.map((story) => {
				const { objectID, title, num_comments, url, points, author } = story;
				return (
					<article key={objectID} className='story'>
						<h4>{title ? title : 'UNAVAILABLE ARTICLE'}</h4>
						<p className='info'>
							{title
								? `${points} points by ${author} |`
								: 'THIS ARTICLE DOES NOT EXIST'}{' '}
							{title ? `${num_comments} comments` : ''}
						</p>
						<div>
							{title ? (
								<a
									href={url}
									target='_blank'
									rel='noopener noreferrer'
									className='read-link'>
									read more
								</a>
							) : (
								''
							)}
							<button
								className='remove-btn'
								onClick={() => removeStory(objectID)}>
								remove
							</button>
						</div>
					</article>
				);
			})}
		</section>
	);
};

export default Stories;

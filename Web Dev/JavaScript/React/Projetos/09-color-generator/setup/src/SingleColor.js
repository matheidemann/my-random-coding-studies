import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, type, index, hexColor }) => {
	const [alert, setAlert] = useState(false);
	const bgColor = rgb.join(',');
	const hexValue = `#${hexColor}`;
	useEffect(() => {
		const timeout = setTimeout(() => {
			setAlert(false);
		}, 1500);
		return () => clearTimeout(timeout);
	}, [alert]);

	return (
		<article
			className={`color ${type == 'shade' && 'color-light'} `}
			style={{ backgroundColor: `rgb(${bgColor})` }}
			onClick={() => {
				setAlert(true);
				navigator.clipboard.writeText(hexValue);
			}}>
			<p className='percent-value'>{`${weight}%`}</p>
			<p className='color-value'>{hexValue}</p>
			{alert && <p className='alert'>COPIED TO CLIPBOARD</p>}
		</article>
	);
};

export default SingleColor;

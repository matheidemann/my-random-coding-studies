import React, { useEffect } from 'react';
import { useGlobalContext } from './context';
import phoneImg from './images/phone.svg';

const Hero = () => {
	const { closeSubmenu } = useGlobalContext();
	const { closeSubmenuBigScreen } = useGlobalContext();

	useEffect(() => {
		window.addEventListener('resize', closeSubmenuBigScreen);
		return () => {
			window.removeEventListener('resize', closeSubmenuBigScreen);
		};
	});

	return (
		<section className='hero' onMouseOver={closeSubmenu}>
			<div className='hero-center'>
				<article className='hero-info'>
					<h1>
						Payments infrastructure <br />
						for the internet
					</h1>
					<p>
						Millions of companies of all sizes—from startups to Fortune 500s—use
						Stripe’s software and APIs to accept payments, send payouts, and
						manage their businesses online.
					</p>
					<button className='btn'>Start now</button>
				</article>
				<article className='hero-images'>
					<img className='phone-img' src={phoneImg} alt='' />
				</article>
			</div>
		</section>
	);
};

export default Hero;

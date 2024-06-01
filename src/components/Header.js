import { Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';

const Header = () => {
	const [isSticky, setIsSticky] = useState(false);
	// Sticky Menu Area
	useEffect(() => {
		window.addEventListener('scroll', handleSticky);
		return () => {
			window.removeEventListener('scroll', handleSticky);
		};
	});

	const handleSticky = (e) => {
		if (window.scrollY >= 50) {
			setIsSticky(true);
		} else {
			setIsSticky(false);
		}
	};
	return (
		<header
			className={`text-center bg-admin p-4 shadow-md shadow-gray-400 duration-200 z-50 mb-8 ${
				isSticky ? '-translate-y-full' : ''
			}`}
		>
			<Typography
				variant="h1"
				className="uppercase text-3xl desktop:text-5xl text-white font-bold"
			>
				Verify Signature
			</Typography>
			<Typography variant="h5" className="italic opacity-70 text-white">
				Made by: Group 9
			</Typography>
		</header>
	);
};

export default Header;

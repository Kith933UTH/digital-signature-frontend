import { Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';

const Footer = () => {
	const [isSticky, setIsSticky] = useState(false);
	// Sticky Menu Area
	useEffect(() => {
		window.addEventListener('scroll', handleSticky);
		return () => {
			window.removeEventListener('scroll', handleSticky);
		};
	});

	const handleSticky = (e) => {
		if (window.scrollY >= 520) {
			setIsSticky(true);
		} else {
			setIsSticky(false);
		}
	};

	return (
		<footer
			className={`text-center bg-admin p-2 shadow-md shadow-gray-400 duration-200 translate-y-full fixed bottom-0 w-full z-10 ${
				isSticky ? '!translate-y-0' : ''
			}`}
		>
			<div className="flex justify-between max-w-[1200px] mx-auto flex-wrap">
				<Typography
					variant="h5"
					className="italic text-white text-sm desktop:text-xl"
				>
					Le Minh Thien
				</Typography>
				<Typography
					variant="h5"
					className="italic text-white text-sm desktop:text-xl"
				>
					Nguyen Trung Tuan Kiet
				</Typography>
				<Typography
					variant="h5"
					className="italic text-white text-sm desktop:text-xl"
				>
					Tran Thi Thanh Tuyen
				</Typography>
				<Typography
					variant="h5"
					className="italic text-white text-sm desktop:text-xl"
				>
					Nguyen Hong Vu
				</Typography>
			</div>
		</footer>
	);
};

export default Footer;

'use client';

import { useState, useEffect } from 'react';
import Header from './Header';

const HeaderWrapper = () => {
	const [isSticky, setIsSticky] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			setIsSticky(scrollY > 50); // 원하는 위치 조절
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div
			className={`flex w-full justify-center transition-all duration-300 ${
				isSticky ? 'sticky top-12 z-50' : 'relative'
			}`}
		>
			<Header />
		</div>
	);
};

export default HeaderWrapper;

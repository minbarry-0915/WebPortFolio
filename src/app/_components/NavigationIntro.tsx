'use client';

import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const NavigationIntro = () => {
	const onClick = () => {
		const targetEl = document.getElementById('introduce');

		if (targetEl) {
			requestAnimationFrame(() => {
				const y = targetEl.getBoundingClientRect().top + window.scrollY;

				window.scrollTo({
					top: y - 140, // 고정 헤더 높이만큼 보정
					behavior: 'smooth',
				});
			});
		}
	};

	return (
		<motion.button
			onClick={onClick}
			initial={{ y: 0, opacity: 1 }}
			animate={{ y: [0, 10, 0] }}
			transition={{
				duration: 1.5,
				repeat: Infinity,
				ease: 'easeInOut',
			}}
			className='flex flex-col items-center text-gray-500 dark:text-gray-300'
		>
			<ChevronDoubleDownIcon className='w-6 h-6' />
		</motion.button>
	);
};

export default NavigationIntro;

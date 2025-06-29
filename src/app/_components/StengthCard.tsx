'use client';

import { motion } from 'framer-motion';

interface StrengthCardProps {
	title: string;
	description: string;
	initialX?: number;
	initialRotate: number;
	whileInViewRotate: number;
	isDark: boolean;
}

const StrengthCard = ({
	title,
	description,
	initialX = 0,
	initialRotate,
	whileInViewRotate,
	isDark,
}: StrengthCardProps) => {
	return (
		<motion.div
			initial={{
				x: initialX,
				rotate: initialRotate,
				boxShadow: isDark ? 'none' : '0 0 10px rgba(0,0,0,0.2)',
			}}
			whileInView={{ x: 0, rotate: whileInViewRotate }}
			whileHover={{
				scale: 1.03,
				boxShadow: isDark ? 'none' : '0 0 20px rgba(0,0,0,0.2)',
			}}
			viewport={{ once: true, amount: 0.5 }}
			transition={{ type: 'spring', stiffness: 70 }}
			className='w-3xs aspect-square flex flex-col items-center justify-center bg-card-light dark:bg-card-dark rounded-2xl shadow-md z-1 p-4 gap-2'
		>
			<p className='font-semibold text-xl text-center'>{title}</p>
			<div className='relative z-20 font-extralight text-center break-keep'>
				{description}
			</div>
		</motion.div>
	);
};

export default StrengthCard;

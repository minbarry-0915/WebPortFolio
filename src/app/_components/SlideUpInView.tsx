'use client';

import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
interface SlideUpInViewProps extends PropsWithChildren {
	once?: boolean;
}

const SlideUpInView = ({
	children,
	once = true,
	...props
}: SlideUpInViewProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once }}
			transition={{ delay: 0.1, duration: 0.6, ease: 'easeIn' }}
			className='w-full'
			{...props}
		>
			{children}
		</motion.div>
	);
};

export default SlideUpInView;

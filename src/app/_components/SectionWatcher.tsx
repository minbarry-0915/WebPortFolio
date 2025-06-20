'use client';

import { useInView } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

interface SectionWatcherProps {
	id: string;
	onEnter?: () => void;
	children: ReactNode;
}
const SectionWatcher = ({ id, onEnter, children }: SectionWatcherProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		margin: '-50% 0px -50% 0px', // 요소가 뷰포트 정중앙에 도달했을 때만 inView === true
	});

	useEffect(() => {
		if (isInView && onEnter) {
			onEnter();
		}
	}, [isInView]);

	return (
		<section ref={ref} id={id} className='w-full'>
			{children}
		</section>
	);
};

export default SectionWatcher;

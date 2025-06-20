'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface ModalLayoutProps {
	children: ReactNode;
}

const ModalLayout = ({ children }: ModalLayoutProps) => {
	const router = useRouter();

	const onRequestClose = () => {
		router.back(); // 모달 닫기 시 URL 이전으로
	};

	return (
		<motion.div
			onClick={onRequestClose}
			className='fixed inset-0 z-50 flex items-center justify-center bg-black/30'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.1 }}
		>
			<div
				className='bg-card-light dark:bg-card-dark p-6 rounded-lg relative max-w-lg w-screen max-h-[90svh] top-0 left-0 overflow-y-scroll scrollbar-hide'
				onClick={(e) => e.stopPropagation()} // 모달 안 클릭 시 닫히지 않게
			>
				<button
					onClick={onRequestClose}
					className='absolute top-2 right-2 text-gray-500 hover:text-gray-800'
				>
					닫기
				</button>
				{children}
			</div>
		</motion.div>
	);
};

export default ModalLayout;

'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ModalLayoutProps {
	children: ReactNode;
}

const ModalLayout = ({ children }: ModalLayoutProps) => {
	const router = useRouter();
	const onRequestClose = () => {
		router.back(); // 모달 닫기 시 URL 이전으로
	};

	useEffect(() => {
		// 루트 children의 스크롤을 막기 위해 HTML과 body의 overflow를 hidden으로 설정
		const originalHtmlOverflow = document.documentElement.style.overflow;
		const originalBodyOverflow = document.body.style.overflow;

		document.documentElement.style.overflow = 'hidden';
		document.body.style.overflow = 'hidden';

		return () => {
			document.documentElement.style.overflow = originalHtmlOverflow;
			document.body.style.overflow = originalBodyOverflow;
		};
	}, []);
	return (
		<AnimatePresence>
			<motion.div
				onClick={onRequestClose}
				className='fixed inset-0 z-50 flex items-center justify-center bg-black/30'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.1 }}
			>
				<div
					className='bg-card-light dark:bg-card-dark p-8 rounded-lg relative max-w-2xl w-screen max-h-[90svh] top-0 left-0 overflow-y-scroll'
					onClick={(e) => e.stopPropagation()} // 모달 안 클릭 시 닫히지 않게
				>
					<motion.button
						onClick={onRequestClose}
						initial={{ scale: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.3 }}
						className='absolute top-5 right-5 text-gray-500 rounded-full bg-background p-1 cursor-pointer'
					>
						<XMarkIcon className='w-6 h-6 text-foreground/50 hover:text-foreground active:text-foreground' />
					</motion.button>
					{children}
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default ModalLayout;

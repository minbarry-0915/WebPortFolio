'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
const IntroduceSection = () => {
	const [mounted, setMounted] = useState(false);
	const isMobile = useMediaQuery({ minWidth: 768 });

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<section
			id='introduce'
			className='w-full flex flex-col justify-center items-center  border-2'
		>
			<h2 className='font-semibold text-2xl md:text-3xl mb-3 '>나의 강점</h2>
			<div className='font-medium text-lg md:text-xl mb-6 '>
				기술로 말하고, 결과로 증명하며, 소통으로 잇습니다
			</div>
			{isMobile && mounted && (
				<div className='flex justify-center items-center gap-6 border-2'>
					<motion.div
						initial={{ x: 250, rotate: -25 }}
						whileInView={{ x: 0, rotate: -7 }}
						whileHover={{ scale: 1.03 }}
						viewport={{ once: true, amount: 0.5 }} // 한 번만 재생
						transition={{ type: 'spring', stiffness: 70 }}
						className='w-3xs aspect-square flex flex-col  items-center justify-center bg-card-light dark:bg-card-dark rounded-2xl shadow-md z-1 break-keep'
					>
						<p>원활한 협업과 커뮤니케이션</p>
						React Native, React, Next.js를 활용해 실제 서비스를 개발한 경험이
						있으며, 사용자 중심 UI 설계와 TypeScript 기반의 안정적인 코드 작성에
						능숙합니다.
					</motion.div>
					<motion.div
						initial={{ rotate: 10 }}
						whileInView={{ rotate: 2 }}
						whileHover={{ scale: 1.03 }}
						viewport={{ once: true, amount: 0.5 }} // 한 번만 재생
						transition={{ type: 'spring', stiffness: 70 }}
						className='w-3xs aspect-square  flex flex-col  items-center justify-center bg-card-light dark:bg-card-dark rounded-2xl shadow-md break-keep'
					>
						<p>원활한 협업과 커뮤니케이션</p>
						다양한 AI 기술을 접목해 개인화된 사용자 경험을 제공하는 맞춤형
						서비스를 구현한 경험이 있습니다.
					</motion.div>
					<motion.div
						initial={{ x: -250, rotate: 13 }}
						whileInView={{ x: 0, rotate: 6 }}
						whileHover={{ scale: 1.03 }}
						viewport={{ once: true, amount: 0.5 }} // 한 번만 재생
						transition={{ type: 'spring', stiffness: 70 }}
						className='w-3xs aspect-square flex flex-col items-center justify-center bg-card-light dark:bg-card-dark rounded-2xl shadow-md z-2 break-keep'
					>
						<p>원활한 협업과 커뮤니케이션</p>
						풀스택 개발 경험을 통한 디자이너, 기획자, 백엔드 개발자 등 다양한
						직군과 원활하게 소통하며 협업할 수 있습니다
					</motion.div>
				</div>
			)}
		</section>
	);
};

export default IntroduceSection;

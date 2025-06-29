'use client';

import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import StrengthCard from '../_components/StengthCard';
const IntroduceSection = () => {
	const [mounted, setMounted] = useState(false);
	const isMobile = useMediaQuery({ minWidth: 768 });

	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		setMounted(true);
		// 다크모드 감지
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		setIsDark(mediaQuery.matches);

		const handleChange = (e: MediaQueryListEvent) => {
			setIsDark(e.matches);
		};

		// 변경 감지
		mediaQuery.addEventListener('change', handleChange);

		return () => mediaQuery.removeEventListener('change', handleChange);
	}, []);

	return (
		<section
			id='introduce'
			className='w-full flex flex-col justify-center items-center py-32'
		>
			<h2 className='font-semibold text-2xl md:text-3xl mb-3 '>나의 강점</h2>
			<div className='font-medium text-lg md:text-xl mb-12'>
				기술로 말하고, 결과로 증명하며, 소통으로 잇습니다
			</div>
			{isMobile && mounted && (
				<div className='flex justify-center items-center gap-6'>
					<StrengthCard
						title='React 기반 개발 경험'
						description='React Native, React, Next.js를 활용해 실제 서비스를 개발한 경험이 있으며, TypeScript 기반의 안정적인 코드 작성에 능숙합니다.'
						initialX={250}
						initialRotate={-25}
						whileInViewRotate={-7}
						isDark={isDark}
					/>
					<StrengthCard
						title='맞춤형 AI 서비스 구현'
						description='다양한 AI 기술을 접목해 개인화된 사용자 경험을 제공하는 맞춤형 서비스를 구현한 경험이 있습니다.'
						initialRotate={10}
						whileInViewRotate={2}
						isDark={isDark}
					/>
					<StrengthCard
						title='원활한 협업과 커뮤니케이션'
						description='풀스택 개발 경험을 통한 디자이너, 기획자, 백엔드 개발자 등 다양한 직군과 원활하게 소통하며 협업할 수 있습니다'
						initialX={-250}
						initialRotate={13}
						whileInViewRotate={6}
						isDark={isDark}
					/>
				</div>
			)}
		</section>
	);
};

export default IntroduceSection;

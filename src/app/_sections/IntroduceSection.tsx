'use client';

import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import StrengthCard from '../_components/StengthCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const cardData = [
	{
		title: 'React 생태계에 대한 깊은 이해',
		description:
			'React Native, React, Next.js를 활용한 서비스를 개발한 경험이 있으며, TypeScript 기반의 안정적인 코드 작성에 능숙합니다.',
	},
	{
		title: '맞춤형 AI 서비스 구현',
		description:
			'다양한 AI 기술을 접목해 개인화된 사용자 경험을 제공하는 맞춤형 서비스를 구현한 경험이 있습니다.',
	},
	{
		title: '원활한 협업과 커뮤니케이션',
		description:
			'풀스택 개발 경험을 통한 디자이너, 기획자, 백엔드 개발자 등 다양한 직군과 원활하게 소통하며 협업할 수 있습니다.',
	},
];

const IntroduceSection = () => {
	const [mounted, setMounted] = useState(false);
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		setMounted(true);
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		setIsDark(mediaQuery.matches);

		const handleChange = (e: MediaQueryListEvent) => {
			setIsDark(e.matches);
		};

		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	}, []);

	return (
		<section
			id='introduce'
			className='w-full flex flex-col justify-center items-center py-24 sm:py-48'
		>
			<h2 className='font-semibold text-2xl md:text-3xl mb-3'>나의 강점</h2>
			<div className='font-medium text-lg md:text-xl mb-12'>
				기술로 말하고, 결과로 증명하며, 소통으로 잇습니다
			</div>

			{mounted && isMobile ? (
				<Swiper
					slidesPerView={1}
					spaceBetween={1}
					loop={true}
					modules={[Pagination]}
					pagination={{ clickable: true }}
					style={{
						display: 'flex',
						width: '100%',
						paddingTop: '1rem',
						paddingBottom: '3rem',
					}}
				>
					{cardData.map((card) => (
						<SwiperSlide
							key={card.title}
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '100%',
							}}
						>
							<StrengthCard
								title={card.title}
								description={card.description}
								isDark={isDark}
								initialRotate={0}
								whileInViewRotate={0}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			) : (
				<div className='flex justify-center items-center gap-6'>
					{cardData.map((card, index) => (
						<StrengthCard
							key={card.title}
							title={card.title}
							description={card.description}
							initialX={index === 0 ? 250 : index === 2 ? -250 : 0}
							initialRotate={index === 0 ? -25 : index === 2 ? 13 : 10}
							whileInViewRotate={index === 0 ? -7 : index === 2 ? 6 : 2}
							isDark={isDark}
						/>
					))}
				</div>
			)}
		</section>
	);
};

export default IntroduceSection;

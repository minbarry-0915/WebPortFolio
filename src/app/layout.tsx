import type { Metadata } from 'next';
import './globals.css';
// import { gothicNeo } from './util/font';

import { ReactNode } from 'react';

export const metadata: Metadata = {
	title: '이지민 | 프론트엔드 개발자 포트폴리오',
	description:
		'React, React Native 기반으로 고객 중심의 서비스를 개발하는 프론트엔드 개발자 이지민의 포트폴리오입니다.',
	keywords: [
		'프론트엔드',
		'프론트엔드 개발자',
		'이지민',
		'포트폴리오',
		'프론트엔드 포트폴리오',
		'웹 개발자',
		'React',
		'React Native',
		'프론트엔드 경력',
		'프론트엔드 프로젝트',
	],
	authors: [{ name: '이지민', url: 'https://leejiminportfolio.vercel.app' }], // 본인 포트폴리오 주소로 교체
	creator: '이지민',
	openGraph: {
		title: '이지민 | 프론트엔드 개발자 포트폴리오',
		description:
			'React와 React Native 기반의 고객 중심 서비스를 개발하는 이지민의 포트폴리오입니다.',
		url: 'https://leejiminportfolio.vercel.app',
		siteName: '이지민 포트폴리오',
		// images: [
		// 	{
		// 		url: 'https://your-portfolio-url.com/og-image.png', // 썸네일 이미지
		// 		width: 1200,
		// 		height: 630,
		// 		alt: '이지민 포트폴리오 썸네일',
		// 	},
		// ],
		locale: 'ko_KR',
		type: 'website',
	},
	// twitter: {
	// 	card: 'summary_large_image',
	// 	title: '이지민 | 프론트엔드 개발자 포트폴리오',
	// 	description:
	// 		'고객 중심 서비스를 만드는 프론트엔드 개발자 이지민의 포트폴리오',
	// 	images: ['https://your-portfolio-url.com/og-image.png'], // 위와 동일하게 썸네일 이미지
	// },
	metadataBase: new URL('https://leejiminportfolio.vercel.app'),
};

export default function RootLayout({
	children,
	modal,
}: {
	children: ReactNode;
	modal: ReactNode;
}) {
	return (
		<html>
			<body className='w-full min-w-96 max-w-screen-lg min-h-svh mx-auto px-5 md:px-8 lg:px-10 flex flex-col relative'>
				{children}
				{modal}
				<div id='portal-root' />
			</body>
		</html>
	);
}

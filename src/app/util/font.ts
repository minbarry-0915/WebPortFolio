import localFont from 'next/font/local';

export const gothicNeo = localFont({
	src: [
		{
			path: '../assets/fonts/Pretendard-Light.woff2',
			weight: '300',
		},
		{
			path: '../assets/fonts/Pretendard-Regular.woff2',
			weight: '400',
		},
		{
			path: '../assets/fonts/Pretendard-Medium.woff2',
			weight: '500',
		},
		{
			path: '../assets/fonts/Pretendard-SemiBold.woff2',
			weight: '600',
		},
		{
			path: '../assets/fonts/Pretendard-Bold.woff2',
			weight: '700',
		},
		{
			path: '../assets/fonts/Pretendard-ExtraBold.woff2',
			weight: '900',
		},
	],
	display: 'swap',
	variable: '--font-pretendard', // (선택) Tailwind에서 사용할 변수
});

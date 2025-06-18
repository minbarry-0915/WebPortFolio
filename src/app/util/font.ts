import localFont from 'next/font/local';

export const gothicNeo = localFont({
	src: [
		{
			path: '../assets/fonts/AppleSDGothicNeoL.woff2',
			weight: '300',
		},
		{
			path: '../assets/fonts/AppleSDGothicNeoR.woff2',
			weight: '400',
		},
		{
			path: '../assets/fonts/AppleSDGothicNeoM.woff2',
			weight: '500',
		},
		{
			path: '../assets/fonts/AppleSDGothicNeoSB.woff2',
			weight: '600',
		},
		{
			path: '../assets/fonts/AppleSDGothicNeoB.woff2',
			weight: '700',
		},
		{
			path: '../assets/fonts/AppleSDGothicNeoEB.woff2',
			weight: '900',
		},
	],
	display: 'swap',
	variable: '--font-gothic-neo', // (선택) Tailwind에서 사용할 변수
});

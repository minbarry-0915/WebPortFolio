import SectionContainer from '../_components/SectionContainer';
import { ProjectItem } from './WorkExperienceSection';
import {
	ComputerDesktopIcon,
	DevicePhoneMobileIcon,
	PlusIcon,
} from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

interface ProjectDetailItem extends ProjectItem {
	tagline: string;
	mainImage?: string;
}

const projectDetails: ProjectDetailItem[] = [
	{
		title: 'Drillo',
		webMobile: 'mobile',
		startDate: '2024.12',
		tagline: '현장 위에, 기술을 더하다.',
		description: '공사관리 플랫폼',
		detail: [
			'실시간 위험요소 모니터링 시스템 구현',
			'React, TypeScript, Firebase 기반 웹/모바일 클라이언트 개발',
			'현장 관리자를 위한 사용자 맞춤형 UI 설계',
		],
	},
	{
		title: 'SmartCart',
		webMobile: 'mobile',
		startDate: '2024.03',
		endDate: '2024.11',
		tagline: '마트 쇼핑에 날개를 달다.',
		description: '오프라인 장바구니 어플리케이션',
		detail: [
			'React Native와 Redux를 사용한 전역 상태 관리',
			'Google Fit API 연동을 통한 운동량 추적 기능',
			'Firebase를 통한 인증 및 데이터 저장',
		],
	},
	{
		title: 'ReDream',
		webMobile: 'mobile',
		startDate: '2024.07',
		endDate: '2024.08',
		tagline: '상상에 이야기를 입히다.',
		description: 'AI 동화 생성 어플리케이션',
		detail: [
			'Next.js 기반 SSR 지원으로 빠른 페이지 로딩 구현',
			'활동별 탄소 절감량 자동 계산 로직 개발',
			'활동 공유 기능 및 랭킹 시스템 개발',
		],
	},
	{
		title: 'FrogGuard',
		webMobile: 'mobile',
		startDate: '2024.03',
		endDate: '2024.05',
		tagline: '작은 생명, 큰 책임을 자동으로.',
		description: '양서류 자동 관리 어플리케이션',
		detail: [
			'Socket.io를 활용한 실시간 협업 기능 구현',
			'TailwindCSS 기반 반응형 디자인',
			'Supabase를 활용한 인증 및 데이터 관리',
		],
	},
	{
		title: 'English Learning Program',
		webMobile: 'web',
		startDate: '2021.03',
		endDate: '2021.06',
		tagline: '놀면서 외우는, 단어의 마법.',
		description: '초등학생 대상 영단어 학습 시스템',
		detail: [
			'Push Notification으로 아침 루틴 알림 제공',
			'TypeScript 기반 컴포넌트 구조화',
			'React Native Paper 활용한 UI 컴포넌트 커스터마이징',
		],
	},
];

interface WebMobileIconProps {
	webMobile: ProjectItem['webMobile'];
	color?: string;
}

const WebMobileIcon = ({
	webMobile,
	color = 'text-foreground',
}: WebMobileIconProps): ReactNode => {
	switch (webMobile) {
		case 'webMobile':
			return <></>;
		case 'web':
			return <ComputerDesktopIcon className={`w-6 h-6 ${color} stroke-1`} />;
		case 'mobile':
			return <DevicePhoneMobileIcon className={`w-6 h-6 ${color} stroke-1`} />;
	}
};

const ProjectDetailSection = () => {
	return (
		<SectionContainer
			title='프로젝트 상세'
			subtitle='기술로 그려낸 작은 혁신들.'
		>
			<div className='grid md:grid-cols-2 grid-cols-1 gap-7'>
				{projectDetails.map((item, index) => (
					<div
						key={index}
						className='flex flex-col bg-gray-400 shadow-lg rounded-2xl p-[1.125rem] text-white'
					>
						<div className='flex flex-col gap-2'>
							<div className='flex justify-between items-center'>
								<p className='font-bold text-[1.125rem] leading-[1.875rem]'>
									{item.title}
								</p>
								<WebMobileIcon
									webMobile={item.webMobile}
									color={'text-white'}
								/>
							</div>
							<div className='font-bold text-2xl leading-9 mr-6'>
								{(() => {
									const taglines = item.tagline.split(', ');
									return (
										<>
											{taglines.map((tagItem, index) => (
												<p key={index}>{tagItem}</p>
											))}
										</>
									);
								})()}
							</div>
							<p className='text-base leading-7 mr-6'>{item.description}</p>
							<p className='text-base leading-7'>
								{item.startDate} - {item.endDate ?? '진행중'}
							</p>
						</div>
						<button className='w-9 h-9 flex justify-center items-center rounded-full bg-black/60 self-end'>
							<PlusIcon className='w-6 h-6 text-white' />
						</button>
					</div>
				))}
			</div>
		</SectionContainer>
	);
};

export default ProjectDetailSection;

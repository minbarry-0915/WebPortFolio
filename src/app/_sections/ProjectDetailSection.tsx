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
		title: '드릴로',
		webMobile: 'mobile',
		startDate: '2024.03',
		endDate: '2024.06',
		tagline: '작은 생명, 큰 책임을 자동으로.',
		description: '건설 현장의 안전과 생명을 관리하는 플랫폼입니다.',
		detail: [
			'실시간 위험요소 모니터링 시스템 구현',
			'React, TypeScript, Firebase 기반 웹/모바일 클라이언트 개발',
			'현장 관리자를 위한 사용자 맞춤형 UI 설계',
		],
	},
	{
		title: '펫케어 메이트',
		webMobile: 'mobile',
		startDate: '2023.12',
		endDate: '2024.02',
		tagline: '반려동물의 일상, 손안에서 관리하다.',
		description: '반려동물의 건강, 식사, 산책 기록을 관리하는 모바일 앱',
		detail: [
			'React Native와 Redux를 사용한 전역 상태 관리',
			'Google Fit API 연동을 통한 운동량 추적 기능',
			'Firebase를 통한 인증 및 데이터 저장',
		],
	},
	{
		title: '에코로그',
		webMobile: 'web',
		startDate: '2024.01',
		endDate: '2024.04',
		tagline: '지속가능한 습관, 로그로 기록하다.',
		description: '개인의 환경보호 활동을 기록하고 공유할 수 있는 웹 플랫폼',
		detail: [
			'Next.js 기반 SSR 지원으로 빠른 페이지 로딩 구현',
			'활동별 탄소 절감량 자동 계산 로직 개발',
			'활동 공유 기능 및 랭킹 시스템 개발',
		],
	},
	{
		title: '스터디메이트',
		webMobile: 'web',
		startDate: '2023.10',
		endDate: '2023.12',
		tagline: '혼자보다 함께, 공부의 지속 가능성을 높이다.',
		description: '스터디 그룹 매칭 및 실시간 공동학습 플랫폼',
		detail: [
			'Socket.io를 활용한 실시간 협업 기능 구현',
			'TailwindCSS 기반 반응형 디자인',
			'Supabase를 활용한 인증 및 데이터 관리',
		],
	},
	{
		title: '굿모닝 헬스',
		webMobile: 'mobile',
		startDate: '2023.07',
		endDate: '2023.09',
		tagline: '매일 아침, 건강을 깨우다.',
		description: '개인의 건강 루틴을 만들고 관리할 수 있는 헬스케어 앱',
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
	color = 'text-black',
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

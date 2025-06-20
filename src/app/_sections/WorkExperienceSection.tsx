import Seperator from '../_components/Seperator';

import SectionContainer from '../_components/SectionContainer';
import GenericRow from '../_components/GenericRow';
import { ReactNode } from 'react';
import {
	ComputerDesktopIcon,
	DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';

export interface ProjectItem {
	title: string;
	webMobile: 'web' | 'mobile' | 'webMobile';
	startDate: string;
	endDate?: string;
	description: string;
	detail?: string[];
}

const projectDummy: ProjectItem[] = [
	{
		startDate: '2024.03',
		webMobile: 'mobile',
		title: 'SmartCart: 오프라인 스마트 쇼핑 시스템',
		description:
			'비콘을 활용한 실시간 위치 안내 및 구매 이력 기반 상품 추천 서비스',
		detail: [
			'React Native와 Node.js 기반의 모바일 앱 및 서버 개발',
			'비콘을 활용한 상품 근접 알림 및 실시간 거리 계산 기능 구현',
			'사용자 구매 이력을 기반으로 XGBoost 모델을 이용한 상품 추천',
			'AWS EC2, Docker를 통한 서버 배포 및 테스트 환경 구축',
		],
	},
	{
		startDate: '2024.01',
		endDate: '2024.02',
		webMobile: 'mobile',
		title: 'ReDream: AI 동화 생성 앱',
		description: 'TTS 및 생성형 AI를 활용한 맞춤형 동화 생성 서비스',
		detail: [
			'React Native 기반 앱 개발 및 AWS Polly 연동 TTS 기능 구현',
			'OpenAI API를 활용한 동화 생성 기능 개발',
			'Redux 및 Context API로 사용자 상태 관리',
			'JWT 기반 인증 및 AWS S3 연동을 통한 이미지/오디오 저장',
		],
	},
];

interface WebMobileIconProps {
	webMobile: ProjectItem['webMobile'];
}

const WebMobileIcon = ({ webMobile }: WebMobileIconProps): ReactNode => {
	switch (webMobile) {
		case 'webMobile':
			return <></>;
		case 'web':
			return (
				<ComputerDesktopIcon className='w-6 h-6 md:w-7 md:h-7 text-foreground stroke-1 shrink-0' />
			);
		case 'mobile':
			return (
				<DevicePhoneMobileIcon className='w-6 h-6 md:w-7 md:h-7 text-foreground stroke-1 shrink-0' />
			);
	}
};

const WorkExperienceSection = () => {
	return (
		<SectionContainer title='경력사항' subtitle='경험과 성장의 기록들.'>
			<Seperator title='프로젝트' />
			<div className='flex flex-col gap-9'>
				{projectDummy.map((item, index) => (
					<GenericRow
						key={index}
						item={item}
						icon={<WebMobileIcon webMobile={item.webMobile} />}
					/>
				))}
			</div>
		</SectionContainer>
	);
};

export default WorkExperienceSection;

import Seperator from '../_components/Seperator';
import ExperienceCard from '../_components/ExperienceCard';
import SectionContainer from '../_components/SectionContainer';

interface ProjectItem {
	startDate: string;
	endDate?: string;
	webMobile: 'web' | 'mobile' | 'webMobile';
	title: string;
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
	{
		startDate: '2023.09',
		endDate: '2023.12',
		webMobile: 'web',
		title: 'SpiderSense: 화장품 성분 분석 플랫폼',
		description: '화장품 성분 분석 및 유해 성분 경고 서비스',
		detail: [
			'Next.js 기반 웹 UI 및 사용자 피드백 중심 UX 설계',
			'OpenAI 모델과 한국어 성분 데이터를 활용한 성분 설명 자동화',
			'피부 타입별 맞춤 주의 성분 추천 기능 구현',
			'상품 검색 및 구매 링크 연동 기능 제공',
		],
	},
	{
		startDate: '2023.06',
		endDate: '2023.08',
		webMobile: 'web',
		title: 'Insurance Insight: 사이버 보험 분석 시스템',
		description: 'AI 기반 사이버 보험 상품 비교 및 위험 평가 플랫폼',
		detail: [
			'Spring Boot 기반 API 서버 개발 및 보안 이슈 대응',
			'PySpark와 Docker Compose를 활용한 대용량 로그 ETL 파이프라인 구축',
			'MongoDB, MySQL을 활용한 이중 저장 구조 설계',
			'Explainable AI 적용으로 예측 근거 제공 기능 구현',
		],
	},
	{
		startDate: '2022.11',
		endDate: '2022.12',
		webMobile: 'mobile',
		title: 'TimeBuddy: 팀 일정 공유 앱',
		description: '대학생 팀 프로젝트용 일정 조율 및 알림 앱',
		detail: [
			'React Native 기반 앱 인터페이스 설계 및 캘린더 UI 구현',
			'Firebase Authentication 및 Firestore로 실시간 데이터 동기화',
			'Kakao Login 연동 및 푸시 알림 기능 구현',
			'시간 중복 여부 자동 체크 알고리즘 설계',
		],
	},
];

const WorkExperienceSection = () => {
	return (
		<SectionContainer title='경력사항' subtitle='경험과 성장의 기록들'>
			<Seperator title='프로젝트' />
			<div className='flex flex-col mt-6 gap-9'>
				{projectDummy.map((item, index) => (
					<ExperienceCard key={index} item={item} />
				))}
			</div>
		</SectionContainer>
	);
};

export default WorkExperienceSection;

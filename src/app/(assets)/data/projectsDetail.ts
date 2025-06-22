export const PROJECTDETAILDATA: ProjectData[] = [
	{
		id: '1',
		title: 'AI 기반 챗봇 서비스',
		info: {
			tagline:
				'나의 포트폴리오 사이트 제작 프로젝트 데이터를 분리하여 관리하며 빌드 시점에 렌더링하는 SSG 웹 제작',
			webMobile: 'web',
			startDate: '2024.01',
			endDate: '2024.03',
			member: '3명',
		},
		details: [
			{
				title: 'Tailwind css 사용',
				items: [
					'실시간 챗봇 응답 처리',
					'대화 내용 저장 및 분석',
					'UI 반응형 처리',
				],
			},
			{
				title: '기여 내용',
				items: ['프론트엔드 전체 구현', '챗봇 API 연동 및 커스터마이징'],
			},
		],
		links: [
			{ label: '서비스링크', href: 'https://example.com/chatbot' },
			{ label: '서비스링크', href: 'https://example.com/chatbot' },
		],
	},
	{
		id: '2',
		title: '팀 협업 프로젝트 관리 툴',
		info: {
			tagline: '프로젝트 진행 상황을 시각화',
			webMobile: 'webMobile',
			startDate: '2023-09',
			endDate: '2023-12',
			member: '5명',
		},
		details: [
			{
				title: '기능 요약',
				items: ['Kanban 보드', 'Gantt 차트', '캘린더 연동'],
			},
			{
				title: '담당 역할',
				items: ['DB 설계 및 API 구축', 'Task 관련 UI 구성 및 테스트'],
			},
		],
		links: [
			{ label: '깃허브', href: 'https://github.com/example/project-tool' },
		],
	},
	{
		id: '3',
		title: '개인용 가계부 앱',
		info: {
			tagline: '지출 패턴을 자동 분석하는 앱',
			webMobile: 'mobile',
			startDate: '2024-02',
			member: '1명',
		},
		details: [
			{
				title: '기능 구성',
				items: ['카테고리별 지출 요약', '지출 시각화 차트', '알림 기능'],
			},
			{
				title: '개발 범위',
				items: ['전체 UI/UX 설계', '백엔드 없이 Firebase 사용'],
			},
		],
		links: [{ label: '앱스토어', href: 'https://appstore.com/examplebudget' }],
	},
	{
		id: '4',
		title: '개발 블로그 CMS 플랫폼',
		info: {
			tagline: 'Notion을 활용한 간편한 콘텐츠 관리',
			webMobile: 'web',
			startDate: '2023-06',
			endDate: '2023-07',
		},
		details: [
			{
				title: '핵심 기능',
				items: ['다크모드 지원', '포스트 태그 및 검색 기능', 'Notion 연동'],
			},
			{
				title: '기술 스택 활용',
				items: ['정적 페이지 생성 (SSG)', 'SEO 메타데이터 자동 생성'],
			},
		],
		links: [{ label: '블로그', href: 'https://blog.example.dev' }],
	},
	{
		id: '5',
		title: '소셜 로그인 통합 모듈',
		info: {
			webMobile: 'webMobile',
			startDate: '2024-04',
			member: '2명',
		},
		details: [
			{
				title: '지원 기능',
				items: ['카카오/구글 로그인', 'JWT 토큰 기반 인증', '자동 회원가입'],
			},
			{
				title: '구현 방식',
				items: ['NextAuth로 인증 처리', 'Supabase에 유저 저장'],
			},
		],
		links: [{ label: '배포 링크', href: 'https://auth.example.com' }],
	},
];

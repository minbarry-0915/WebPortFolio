import { ImageProps } from 'next/image';

declare global {
	interface SkillData extends ImageProps {
		id: string;
		name: string;
		info?: string;
	}

	// 프로젝트 상세 페이지용 메인 타입
	interface ProjectData {
		id: string;
		title: string;
		webMobile: 'web' | 'mobile' | 'webMobile';

		// 소개 및 설명
		description: string; // 간단 요약
		overview: string[]; // 전체 개요

		// 메타 정보
		skills: SkillData[];
		member: number;
		startDate: string; // ex: "2025.05"
		endDate: string;
		links: { label: string; url: string }[];

		// 기능 요약 및 상세 구현
		summaryDetail: string[]; // 간단 기능 목록
		details: ProjectDetailData[]; // 상세 기능 설명

		// 문제 해결
		troubleshooting?: ProjectTrouble[];
	}

	// 상세 기능 설명
	interface ProjectDetailData {
		id: string;
		title: string; // 상세 기능 제목
		description: string[]; // 설명
		images?: ImageProps[];
	}

	// 트러블 슈팅
	interface ProjectTrouble {
		id: string;
		title: string;
		symptom: string;
		cause?: string;
		solutions: string[];
		result: string;
	}

	// 메인페이지용 카드/로우 인터페이스
	interface ProjectCardItemProps {
		id: string;
		title: string;
		webmobile: 'web' | 'mobile' | 'webMobile';
		tagline: string;
		startdate: string;
		enddate?: string;
		description: string;
	}

	interface ProjectRowProps {
		id: string;
		title: string;
		webMobile: 'web' | 'mobile' | 'webMobile';
		startdate: string;
		enddate?: string;
		description?: string;
		details: string[];
	}

	interface EducationRowProps {
		id: string;
		title: string;
		startdate: string;
		enddate?: string;
		description?: string;
		details?: string[];
	}

	interface CertificationRowProps {
		id: string;
		title: string;
		issuedate: string;
		description?: string;
	}

	interface AwardRowProps {
		id: string;
		title: string;
		issuedate: string;
		description?: string;
	}
}
export {};

import { ImageProps } from 'next/image';

declare global {
	interface SkillData extends ImageProps {
		id: string;
		name: string;
		info?: string;
	}

	interface ProjectInfoData {
		description?: string;
		webMobile: 'web' | 'mobile' | 'webMobile';
		startDate: string;
		endDate?: string;
		member?: string;
		skills?: SkillData[];
	}

	interface ProjectDetailData {
		title: string;
		items?: string[];
	}

	interface ProjectLinkData {
		label: string;
		href: string;
	}

	// 프로젝트 상세 페이지
	interface ProjectData {
		id: string;
		title: string;
		info: ProjectInfoData;
		details: ProjectDetailData[];
		links?: ProjectLinkData[];
	}
	// 프로젝트 상세 섹션
	interface ProjectCardItemProps {
		id: string;
		title: string;
		webmobile: 'web' | 'mobile' | 'webMobile';
		tagline: string;
		startdate: string;
		enddate?: string;
		description: string;
	}
	// 경력사항 섹션 -> 프로젝트
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

declare global {
	interface SkillData {
		id: string;
		name: string;
		icon?: string;
	}

	interface ProjectInfoData {
		tagline?: string;
		webMobile: 'web' | 'mobile' | 'webMobile';
		startDate: string;
		endDate?: string;
		member?: string;
		skills: SkillData[];
	}

	interface ProjectDescriptionData {
		title: string;
		items?: string[];
	}

	interface ProjectLinkData {
		label: string;
		href: string;
	}

	interface ProjectData {
		id: string;
		title: string;
		info: ProjectInfoData;
		description: ProjectDescriptionData[];
		links?: ProjectLinkData[];
	}

	interface ProjectCardItemProps {
		id: string;
		title: string;
		info: Pick<
			ProjectInfoData,
			'tagline' | 'webMobile' | 'startDate' | 'endDate'
		>;
	}

	interface ProjectRowProps {
		id: string;
		title: string;
		info: Pick<
			ProjectInfoData,
			'tagline' | 'webMobile' | 'startDate' | 'endDate'
		>;
		description: string[];
	}

	interface EducationRowProps {
		id: string;
		title: string;
		startDate: string;
		endDate?: string;
		description?: string;
	}

	interface CertificationRowProps {
		id: string;
		title: string;
		issueDate: string;
		description?: string;
	}

	interface AwardRowProps {
		id: string;
		title: string;
		issueDate: string;
		description?: string;
	}
}
export {};

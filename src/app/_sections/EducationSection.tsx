import GenericRow, { BaseRowItem } from '../_components/GenericRow';
import GenericRowWithoutEndDate from '../_components/GenericRowWithoutEndDate';
import SectionContainer from '../_components/SectionContainer';
import Seperator from '../_components/Seperator';
import { BuildingLibraryIcon } from '@heroicons/react/24/outline';

const EDUCATIONDATA: BaseRowItem[] = [
	{
		title: '충북대학교',
		description: '토목공학 전공, 소프트웨어 복수전공',
		startDate: '2017.03',
		endDate: '2025.02',
		detail: ['학점: 3.78 / 4.5'],
	},
	{
		title: '겨울 방학 SW 개발자과정 몰입교육',
		description: '충북대학교 SW 중심대학사업단',
		startDate: '2022.01',
		endDate: '2022.02',
		detail: [
			'이수시간: 196시간',
			'웹 프레임워크 학습',
			'OpenCSV을 이용한 OTT 영화 정보 제공 사이트 개발',
		],
	},
];

interface Certificate {
	title: string;
	description?: string;
	date: string;
}
const CERTIFICATIONDATA: Certificate[] = [
	{ title: '정보처리기사', date: '2025.06.13' },
	{ title: 'OPIc', description: 'Intermidiate High', date: '2025.06.13' },
	{ title: 'TOEIC', description: '810', date: '2024.06.16' },
];

const EducationSection = () => {
	return (
		<SectionContainer
			title={'교육 및 자격증'}
			subtitle={'성장의 기초가 된 배움의 기록들.'}
		>
			<Seperator title='교육' />
			<div className='flex flex-col mb-9 gap-9'>
				{EDUCATIONDATA.map((item, index) => (
					<GenericRow
						key={index}
						item={item}
						icon={
							<BuildingLibraryIcon className='w-6 h-6 md:w-7 md:h-7 text-foreground stroke-1 shrink-0' />
						}
					/>
				))}
			</div>

			<Seperator title='자격증' />
			<div className='flex flex-col gap-6'>
				{CERTIFICATIONDATA.map((item, index) => (
					<GenericRowWithoutEndDate key={index} item={item} />
				))}
			</div>
		</SectionContainer>
	);
};

export default EducationSection;

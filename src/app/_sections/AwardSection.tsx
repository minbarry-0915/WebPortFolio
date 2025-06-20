import GenericRowWithoutEndDate, {
	GenericRowWithoutEndDateItem,
} from '../_components/GenericRowWithoutEndDate';
import SectionContainer from '../_components/SectionContainer';

const AWARDDATA: GenericRowWithoutEndDateItem[] = [
	{
		title: '2025 제 15회 DB 금융공모전',
		description: '입상',
		date: '2025.05.23',
	},
	{
		title: 'KAIST 제 4기 APP창업 프로그램 공모전',
		description: '동상',
		date: '2025.02.28',
	},
	{
		title: '1학기 교과기반 프로젝트 영어 발표회',
		description: '우수상',
		date: '2021.06.23',
	},
];

const AwardSection = () => {
	return (
		<SectionContainer title={'수상내역'} subtitle={'성과로 증명한 순간들.'}>
			<div className='flex flex-col gap-6'>
				{AWARDDATA.map((item, index) => (
					<GenericRowWithoutEndDate key={index} item={item} />
				))}
			</div>
		</SectionContainer>
	);
};

export default AwardSection;

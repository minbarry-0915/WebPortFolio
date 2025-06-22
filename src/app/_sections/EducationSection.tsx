import { CERTIFICATIONDATA } from '../(assets)/data/ceritification';
import { EDUCATIONDATA } from '../(assets)/data/education';
import GenericRow from '../_components/GenericRow';
import GenericRowWithoutDetail from '../_components/GenericRowWithoutDetail';
import SectionContainer from '../_components/SectionContainer';
import Seperator from '../_components/Seperator';
import { BuildingLibraryIcon } from '@heroicons/react/24/outline';

const EducationSection = () => {
	return (
		<SectionContainer
			title={'교육 및 자격증'}
			subtitle={'성장의 기초가 된 배움의 기록들.'}
		>
			<Seperator title='교육' />
			<div className='flex flex-col mb-9 gap-9'>
				{EDUCATIONDATA.map((item) => (
					<GenericRow
						key={item.id}
						item={item}
						icon={
							<BuildingLibraryIcon className='w-6 h-6 md:w-7 md:h-7 text-foreground stroke-1 shrink-0' />
						}
					/>
				))}
			</div>

			<Seperator title='자격증' />
			<div className='flex flex-col gap-6'>
				{CERTIFICATIONDATA.map((item) => (
					<GenericRowWithoutDetail key={item.id} item={item} />
				))}
			</div>
		</SectionContainer>
	);
};

export default EducationSection;

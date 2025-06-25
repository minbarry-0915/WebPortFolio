import GenericRow from '../_components/GenericRow';
import GenericRowWithoutDetail from '../_components/GenericRowWithoutDetail';
import SectionContainer from '../_components/SectionContainer';
import Seperator from '../_components/Seperator';
import { BuildingLibraryIcon } from '@heroicons/react/24/outline';
import { supabase } from '../util/supabase/client';

const EducationSection = async () => {
	const { data: certifications, error: certError } = await supabase
		.from('certification')
		.select('*')
		.order('issuedate', { ascending: false });

	const { data: educations, error: eduError } = await supabase
		.from('education_row_view')
		.select('*')
		.order('startdate');

	if (certError || eduError) {
		console.error('Error fetching data:', certError || eduError);
		return <div>교육 및 자격증 데이터를 불러오는 중 오류가 발생했습니다.</div>;
	}

	return (
		<SectionContainer
			id='education'
			title={'교육 및 자격증'}
			subtitle={'성장의 기초가 된 배움의 기록들.'}
		>
			<Seperator title='교육' />
			<div className='flex flex-col mb-9 gap-9'>
				{educations.map((item) => (
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
				{certifications.map((item) => (
					<GenericRowWithoutDetail key={item.id} item={item} />
				))}
			</div>
		</SectionContainer>
	);
};

export default EducationSection;

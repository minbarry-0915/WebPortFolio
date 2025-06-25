import Seperator from '../_components/Seperator';
import SectionContainer from '../_components/SectionContainer';
import GenericRow from '../_components/GenericRow';
import WebMobileIcon from '../_components/WebMobileIcon';
import { supabase } from '../util/supabase/client';

const WorkExperienceSection = async () => {
	const { data: projects, error: projectError } = await supabase
		.from('project_row_view')
		.select('*')
		.order('startdate', { ascending: false });

	if (projectError) {
		console.error('Error fetching project data:', projectError);
		return <div>프로젝트 데이터를 불러오는 중 오류가 발생했습니다.</div>;
	}

	return (
		<SectionContainer
			id='experience'
			title='경력사항'
			subtitle='경험과 성장의 기록들.'
		>
			<Seperator title='프로젝트' />
			<div className='flex flex-col gap-9'>
				{projects.map((item, index) => (
					<GenericRow
						key={index}
						item={item}
						icon={<WebMobileIcon webMobile={item.webmobile} />}
					/>
				))}
			</div>
		</SectionContainer>
	);
};

export default WorkExperienceSection;

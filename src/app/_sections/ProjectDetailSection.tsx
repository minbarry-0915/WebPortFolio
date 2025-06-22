import ProjectCard from '../_components/ProjectCard';
import SectionContainer from '../_components/SectionContainer';
import { supabase } from '../util/supabase/client';

const ProjectDetailSection = async () => {
	const { data: projects, error: projectError } = await supabase
		.from('project_card_view')
		.select('*')
		.order('startdate', { ascending: false });

	if (projectError) {
		console.error('Error fetching project data:', projectError);
		return <div>프로젝트 데이터를 불러오는 중 오류가 발생했습니다.</div>;
	}

	return (
		<SectionContainer
			title='프로젝트 상세'
			subtitle='기술로 그려낸 작은 혁신들.'
		>
			<div className='grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-6'>
				{projects.map((item, index) => (
					<ProjectCard key={index} item={item} />
				))}
			</div>
		</SectionContainer>
	);
};

export default ProjectDetailSection;

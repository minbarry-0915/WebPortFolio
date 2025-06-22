import { PROJECTCARDDATA } from '../(assets)/data/projectCard';
import ProjectCard from '../_components/ProjectCard';
import SectionContainer from '../_components/SectionContainer';

const ProjectDetailSection = () => {
	return (
		<SectionContainer
			title='프로젝트 상세'
			subtitle='기술로 그려낸 작은 혁신들.'
		>
			<div className='grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-6'>
				{PROJECTCARDDATA.map((item, index) => (
					<ProjectCard key={index} item={item} />
				))}
			</div>
		</SectionContainer>
	);
};

export default ProjectDetailSection;

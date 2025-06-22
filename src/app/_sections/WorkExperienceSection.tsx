import Seperator from '../_components/Seperator';
import SectionContainer from '../_components/SectionContainer';
import GenericRow from '../_components/GenericRow';
import { PROJECTROWDATA } from '../(assets)/data/projectRow';
import WebMobileIcon from '../_components/WebMobileIcon';

const WorkExperienceSection = () => {
	return (
		<SectionContainer title='경력사항' subtitle='경험과 성장의 기록들.'>
			<Seperator title='프로젝트' />
			<div className='flex flex-col gap-9'>
				{PROJECTROWDATA.map((item, index) => (
					<GenericRow
						key={index}
						item={item}
						icon={<WebMobileIcon webMobile={item.webMobile} />}
					/>
				))}
			</div>
		</SectionContainer>
	);
};

export default WorkExperienceSection;

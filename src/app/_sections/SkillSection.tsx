import { SKILLDATA } from '../(assets)/data/skill';
import SkillCard from '../_components/SkillCard';
import SlideUpInView from '../_components/SlideUpInView';

const SkillSection = () => {
	return (
		<SlideUpInView>
			<div className='w-full flex flex-col justify-center items-center text-center mb-30 md:mb-60'>
				<h2 className='font-semibold text-2xl md:text-3xl mb-3 '>
					기술 스택 및 도구
				</h2>
				<div className='font-medium text-lg md:text-xl mb-6 '>
					아래의 기술을 사용할 수 있습니다.
				</div>

				<div className='grid grid-cols-3 lg:grid-cols-7 md:grid-cols-4 lg:grid-rows-2 justify-center items-center gap-2 p-2 md:p-2'>
					{SKILLDATA.map((item, index) => (
						<SkillCard key={index} item={item} />
					))}
				</div>
			</div>
		</SlideUpInView>
	);
};

export default SkillSection;

import SkillCard from '../_components/SkillCard';
import SlideUpInView from '../_components/SlideUpInView';
import { supabase } from '../util/supabase/client';

const SkillSection = async () => {
	const { data: skills, error } = await supabase
		.from('skill')
		.select('*')
		.order('competence', { ascending: true })
		.order('name', { ascending: false });

	if (error) {
		console.error('Error fetching skill data:', error);
		return <div>기술 데이터를 불러오는 중 오류가 발생했습니다.</div>;
	}

	return (
		<SlideUpInView>
			<section
				id='skill'
				className='w-full  flex flex-col justify-center items-center text-center mb-36 md:mb-48  py-32'
			>
				<h2 className='font-semibold text-2xl md:text-3xl mb-3 '>
					기술 스택 및 도구
				</h2>
				<div className='font-medium text-lg md:text-xl mb-6 '>
					아래의 기술을 사용할 수 있습니다.
				</div>

				<div className='grid grid-cols-3 lg:grid-cols-7 md:grid-cols-4 lg:grid-rows-2 justify-center items-center gap-x-3 md:gap-y-6 gap-y-4 p-2 md:p-2'>
					{skills.map((item, index) => (
						<SkillCard key={index} item={item} />
					))}
				</div>
			</section>
		</SlideUpInView>
	);
};

export default SkillSection;

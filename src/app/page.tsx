import EducationSection from './_sections/EducationSection';
import MainSection from './_sections/MainSection';
import ProjectDetailSection from './_sections/ProjectDetailSection';
import SkillSection from './_sections/SkillSection';
import WorkExperienceSection from './_sections/WorkExperienceSection';

export default function Home() {
	return (
		<main className='w-full min-w-96 max-w-screen-lg min-h-screen mx-auto px-5 md:px-8 lg:px-10 flex flex-col items-center relative '>
			<MainSection />
			<SkillSection />
			<div className='flex flex-col md:gap-60 gap-24'>
				<WorkExperienceSection />
				<ProjectDetailSection />
				<EducationSection />
			</div>
		</main>
	);
}

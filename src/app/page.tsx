import Header from './_components/Header';
import AwardSection from './_sections/AwardSection';
import EducationSection from './_sections/EducationSection';
import IntroduceSection from './_sections/IntroduceSection';
import MainSection from './_sections/MainSection';
import ProjectDetailSection from './_sections/ProjectDetailSection';
import SkillSection from './_sections/SkillSection';
import WorkExperienceSection from './_sections/WorkExperienceSection';

export default function Home() {
	return (
		<main className='flex flex-col items-center'>
			<MainSection />
			<Header />
			<IntroduceSection />

			<SkillSection />
			<WorkExperienceSection />
			<ProjectDetailSection />
			<EducationSection />
			<AwardSection />
		</main>
	);
}

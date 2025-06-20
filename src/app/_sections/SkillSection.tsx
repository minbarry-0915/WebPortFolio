import SkillCard, { Skill } from '../_components/SkillCard';
import SlideUpInView from '../_components/SlideUpInView';

const SKILLDATA: Skill[] = [
	{
		src: '/images/figma.png',
		alt: 'Figma',
		name: 'Figma',
		info: 'Design and prototyping tool',
	},
	{
		src: '/images/firebase.png',
		alt: 'Firebase',
		name: 'Firebase',
		info: 'Backend as a Service platform',
	},
	{
		src: '/images/github.png',
		alt: 'GitHub',
		name: 'GitHub',
		info: 'Version control and collaboration platform',
	},
	{
		src: '/images/mysql.png',
		alt: 'MySQL',
		name: 'MySQL',
		info: 'Relational database management system',
	},
	{
		src: '/images/nextjs.jpeg',
		alt: 'Next.js',
		name: 'Next.js',
		info: 'React framework for production',
	},
	{
		src: '/images/node.jpeg',
		alt: 'Node.js',
		name: 'Node.js',
		info: 'JavaScript runtime environment',
	},
	{
		src: '/images/python.png',
		alt: 'Python',
		name: 'Python',
		info: 'High-level programming language',
	},
	{
		src: '/images/react.png',
		alt: 'React',
		name: 'React',
		info: 'JavaScript library for building UI',
	},
	{
		src: '/images/reactnative.png',
		alt: 'ReactNative',
		name: 'ReactNative',
		info: 'Framework for building native apps',
	},
	{
		src: '/images/redux.png',
		alt: 'Redux',
		name: 'Redux',
		info: 'State management library',
	},
	{
		src: '/images/tailwind.jpeg',
		alt: 'TailwindCSS',
		name: 'TailwindCSS',
		info: 'Utility-first CSS framework',
	},
	{
		src: '/images/typescript.png',
		alt: 'TypeScript',
		name: 'TypeScript',
		info: 'Typed superset of JavaScript',
	},
];

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

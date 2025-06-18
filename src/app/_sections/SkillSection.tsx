import Image, { ImageProps } from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import SlideUpInView from '../_components/SlideUpInView';
interface SkillItem extends ImageProps {
	name: string;
	info: string;
}
const SKILLDUMMY: SkillItem[] = [
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
			<div className='w-full flex flex-col justify-center items-center text-center mt-[12.5rem] mb-60'>
				<h2 className='font-semibold text-4xl mb-3 leading-12'>
					기술 스택 및 도구
				</h2>
				<div className='font-medium text-2xl mb-12 leading-9'>
					아래의 기술을 사용할 수 있습니다.
				</div>

				<div className='grid lg:grid-cols-7 md:grid-cols-4 grid-cols-3 lg:grid-rows-2 justify-center items-center gap-2 p-4 '>
					{SKILLDUMMY.map((item, index) => (
						<div
							key={index}
							className='flex flex-col justify-center items-center gap-3 p-1.5 hover:scale-110'
						>
							<div className='relative w-12 h-12 rounded-md '>
								<Image
									src={item.src}
									alt={item.alt}
									fill
									className='object-contain rounded-md shadow-md'
								/>
							</div>

							<div className='font-medium text-2xl leading-9'>{item.name}</div>
							<button className='h-8 flex justify-center items-center gap-1'>
								<div className='font-normal text-[1rem] leading-7 text-blue'>
									정보
								</div>
								<ChevronRightIcon className='w-4 h-4 text-blue' />
							</button>
						</div>
					))}
				</div>
			</div>
		</SlideUpInView>
	);
};

export default SkillSection;

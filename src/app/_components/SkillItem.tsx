import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Image, { ImageProps } from 'next/image';

export interface Skill extends ImageProps {
	name: string;
	info: string;
}

interface SkillCardProps {
	item: Skill;
}
const SkillCard = ({ item }: SkillCardProps) => {
	return (
		<div className='flex flex-col justify-center items-center gap-3 p-1.5 hover:scale-110 active:scale-110'>
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
				<div className='font-normal text-[1rem] leading-7 text-blue'>정보</div>
				<ChevronRightIcon className='w-4 h-4 text-blue' />
			</button>
		</div>
	);
};

export default SkillCard;

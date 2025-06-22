import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface SkillCardProps {
	item: SkillData;
}
const SkillCard = ({ item }: SkillCardProps) => {
	return (
		<div className='flex flex-col justify-center items-center gap-3 p-1.5 hover:scale-110 active:scale-110'>
			<div className='relative w-9 h-9 md:w-12 md:h-12 rounded-md '>
				<Image
					src={item.src}
					alt={item.name}
					fill
					className='object-contain rounded-md shadow-md'
				/>
			</div>

			<div className='font-medium text-lg md:text-xl'>{item.name}</div>
			<button className='h-8 flex justify-center items-center gap-1 pl-2'>
				<div className='font-normal md:text-base text-[0.875rem] text-blue'>
					정보
				</div>
				<ChevronRightIcon className='w-4 h-4 text-blue' />
			</button>
		</div>
	);
};

export default SkillCard;

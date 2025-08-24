//import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface SkillCardProps {
	item: SkillData;
}
const SkillCard = ({ item }: SkillCardProps) => {
	return (
		<div className='flex flex-col h-full justify-start items-center md:gap-6 gap-4 p-1.5 transform transition-transform ease-in-out duration-300 hover:scale-110 active:scale-110'>
			<div className='relative w-9 h-9 md:w-12 md:h-12 rounded-md '>
				<Image
					src={item.src}
					alt={item.name}
					fill
					className='object-contain rounded-md shadow-md bg-card-light dark:bg-card-dark'
				/>
			</div>

			<div className='flex flex-col justify-center items-center gap-1'>
				<div className='font-medium text-base md:text-lg'>{item.name}</div>
			</div>
		</div>
	);
};

export default SkillCard;

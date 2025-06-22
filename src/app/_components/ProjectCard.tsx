'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import WebMobileIcon from './WebMobileIcon';

interface ProjectCardProps {
	item: ProjectCardItemProps;
}

const ProjectCard = ({ item }: ProjectCardProps) => {
	const router = useRouter();

	const openModal = () => {
		router.push(`/project/${item.id}`);
	};

	return (
		<motion.button
			onClick={openModal}
			whileHover={{ scale: 1.01, boxShadow: '0 0 30px rgba(0,0,0,0.2)' }}
			whileTap={{ scale: 1.01 }}
			transition={{ type: 'spring', stiffness: 500, damping: 80 }}
			initial={{ scale: 1, boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}
			className='flex flex-col dark:bg-card-dark bg-card-light dark:shadow-none rounded-2xl p-[1.125rem] justify-between text-foreground cursor-pointer'
		>
			<div className='flex flex-col w-full text-start gap-4'>
				<div className='flex justify-between items-center'>
					<p className='font-semibold text-base md:text-lg'>{item.title}</p>
					<WebMobileIcon webMobile={item.webmobile} />
				</div>
				<div className='flex flex-col font-bold text-xl md:text-2xl mr-6'>
					{(() => {
						const taglines = item.tagline.split(', ');
						return (
							<>
								{taglines.map((tagItem, index) => (
									<p key={index}>{tagItem}</p>
								))}
							</>
						);
					})()}
				</div>

				<div className='flex flex-col gap-1'>
					<p className='flex font-medium text-sm md:text-base text-secondary dark:text-secondary-dark'>
						{item.description}
					</p>
					<p className='text-sm md:text-base text-secondary dark:text-secondary-dark'>
						{item.startdate} - {item.enddate ?? '진행중'}
					</p>
				</div>
			</div>
		</motion.button>
	);
};

export default ProjectCard;

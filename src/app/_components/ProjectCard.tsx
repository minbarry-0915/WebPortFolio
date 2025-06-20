'use client';

import { ReactNode } from 'react';
import { ProjectItem } from '../_sections/WorkExperienceSection';
import {
	ComputerDesktopIcon,
	DevicePhoneMobileIcon,
	PlusIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

interface ProjectDetailItem extends ProjectItem {
	tagline: string;
	mainImage?: string;
}

interface ProjectCardProps {
	item: ProjectDetailItem;
}
interface WebMobileIconProps {
	webMobile: ProjectItem['webMobile'];
}

const WebMobileIcon = ({ webMobile }: WebMobileIconProps): ReactNode => {
	switch (webMobile) {
		case 'webMobile':
			return <></>;
		case 'web':
			return (
				<ComputerDesktopIcon className='w-6 h-6 md:w-7 md:h-7 text-foreground stroke-1 shrink-0' />
			);
		case 'mobile':
			return (
				<DevicePhoneMobileIcon className='w-6 h-6 md:w-7 md:h-7 text-foreground stroke-1 shrink-0' />
			);
	}
};

const ProjectCard = ({ item }: ProjectCardProps) => {
	return (
		<motion.div
			whileHover={{ scale: 1.01, boxShadow: '0 0 30px rgba(0,0,0,0.2)' }}
			whileTap={{ scale: 1.01 }}
			transition={{ type: 'spring', stiffness: 500, damping: 30 }}
			initial={{ scale: 1, boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}
			className='flex flex-col dark:bg-card-dark bg-card-light dark:shadow-none rounded-2xl p-[1.125rem] justify-between text-foreground'
		>
			<div className='flex flex-col gap-4'>
				<div className='flex justify-between items-center'>
					<p className='font-semibold text-base md:text-lg'>{item.title}</p>
					<WebMobileIcon webMobile={item.webMobile} />
				</div>
				<div className='font-bold text-xl md:text-2xl mr-6'>
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
						{item.startDate} - {item.endDate ?? '진행중'}
					</p>
				</div>
			</div>
			<button className='w-9 h-9 flex justify-center items-center rounded-full dark:bg-background/60 self-end'>
				<PlusIcon className='w-6 h-6' />
			</button>
		</motion.div>
	);
};

export default ProjectCard;

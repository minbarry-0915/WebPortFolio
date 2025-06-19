'use client';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

export interface BaseCardItem {
	startDate: string;
	endDate?: string;
	title: string;
	description?: string;
	detail?: string[];
}

interface GenericCardProps<T extends BaseCardItem> {
	item: T;
	icon?: ReactNode;
}

const GenericCard = <T extends BaseCardItem>({
	item,
	icon,
}: GenericCardProps<T>) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	return (
		<div className='grid md:grid-cols-3 md:gap-x-12 md:items-start'>
			<div className='flex items-center'>
				<p className='text-[1.125rem] leading-6 mb-3'>
					{item.startDate} - {item.endDate ?? '진행 중'}
				</p>
			</div>

			<div className='md:col-span-2 flex justify-center flex-col gap-1'>
				<div className='flex flex-row justify-start items-start gap-x-2'>
					{icon}
					<p className='text-2xl font-bold leading-9'>{item.title}</p>
				</div>
				{item.description && (
					<p className='text-[1.125rem] leading-[1.825rem] ml-11'>
						{item.description}
					</p>
				)}

				<button
					onClick={() => setIsExpanded(!isExpanded)}
					className='flex justify-start items-center ml-11 text-blue gap-x-2 hover:cursor-pointer'
				>
					<motion.div
						animate={{ rotate: isExpanded ? 90 : 0 }}
						transition={{ duration: 0.3 }}
						className='w-[1.125rem] h-[1.125rem]'
					>
						<ChevronRightIcon />
					</motion.div>

					<p className='font-semibold text-[1.125rem] leading-[1.825rem] align-baseline'>
						{isExpanded ? '상세 내용 가리기' : '상세 내용 보기'}
					</p>
				</button>
				{isExpanded && (
					<ul className='list-disc list-inside rounded-xl bg-foreground/5 -indent-6 py-5 pl-12 md:pl-13 pr-10 ml-11 mt-2.5'>
						{item.detail &&
							item.detail.map((ditem, index) => (
								<li key={index} className='text-[1.125rem] leading-[1.825rem]'>
									{ditem}
								</li>
							))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default GenericCard;

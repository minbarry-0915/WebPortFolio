'use client';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface GenericRowProps {
	item: ProjectRowProps | EducationRowProps;
	icon?: ReactNode;
}

// 경력사항 및 교육 카드용
const GenericRow = ({ item, icon }: GenericRowProps) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const toggleExpandButton = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className='grid md:grid-cols-4 md:items-start'>
			<p className='text-sm md:text-lg items-center mb-2 text-secondary dark:text-secondary-dark'>
				{item.startdate} - {item.enddate ?? '진행 중'}
			</p>

			<div className='md:col-span-3 flex justify-center flex-col gap-1'>
				<div className='flex flex-row justify-start items-start gap-x-2'>
					{icon}
					<div className='w-full flex flex-col gap-2 md:gap-3 '>
						<p className='text-base md:text-xl font-bold'>{item.title}</p>
						<p className='text-sm md:text-lg text-secondary dark:text-secondary-dark'>
							{item.description}
						</p>

						<div className='flex flex-col gap-3'>
							<button
								onClick={toggleExpandButton}
								className='flex justify-start items-center text-blue gap-x-2'
							>
								<motion.div
									animate={{ rotate: isExpanded ? 90 : 0 }}
									transition={{ duration: 0.3 }}
									className='w-4 h-4'
								>
									<ChevronRightIcon />
								</motion.div>

								<p className='font-semibold text-sm md:text-base'>
									{isExpanded ? '상세 내용 가리기' : '상세 내용 보기'}
								</p>
							</button>

							{isExpanded && (
								<ul className='flex-1 list-disc rounded-xl bg-foreground/5 py-5 pl-9 md:pl-11 pr-6 md:pr-10 space-y-1.5 text-secondary dark:text-secondary-dark'>
									{item.details &&
										item.details.map((detail, index) => (
											<li key={index} className='text-sm md:text-base'>
												{detail}
											</li>
										))}
								</ul>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GenericRow;

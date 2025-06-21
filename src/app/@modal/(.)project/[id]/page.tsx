'use client';
import { projectsDetailData } from '@/app/(assets)/data/projectsDetail';
import Seperator from '@/app/_components/Seperator';
import {
	ComputerDesktopIcon,
	DevicePhoneMobileIcon,
	FolderIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { ReactNode } from 'react';

const ProjectModalPage = () => {
	const { id } = useParams() as { id: string };
	console.log(id);

	const data = projectsDetailData.find((project) => project.id === id);

	if (!data) {
		return (
			<>
				<p>해당 프로젝트 정보를 찾을 수 없습니다.</p>
			</>
		);
	}

	// interface WebMobileIconProps {
	// 	type: ProjectInfoData['webMobile'];
	// }

	// const WebMobileIcon = ({ type }: WebMobileIconProps): ReactNode => {
	// 	switch (type) {
	// 		case 'webMobile':
	// 			return <></>;
	// 		case 'web':
	// 			return (
	// 				<ComputerDesktopIcon className='w-9 h-9 md:w-12 md:h-12 text-foreground stroke-1 shrink-0' />
	// 			);
	// 		case 'mobile':
	// 			return (
	// 				<DevicePhoneMobileIcon className='w-9 h-9 md:w-12 md:h-12 text-foreground stroke-1 shrink-0' />
	// 			);
	// 	}
	// };

	return (
		<>
			<h2 className='flex flex-col gap-7 mb-11'>
				<FolderIcon className='w-9 h-9 md:w-12 md:h-12 text-foreground stroke-1 shrink-0 ' />
				<div className='font-bold text-xl pr-4 '>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
					beataeQui beataeQui beataeQui beataeQui beataeQui beataeQui beatae
				</div>
			</h2>

			<div id='project-info' className='flex flex-col gap-6'>
				<div className='flex flex-col gap-1.5'>
					<div className='text-secondary dark:text-secondary-dark'>
						프로젝트 설명
					</div>
					<div className='font-semibold'>{data.info.tagline}</div>
				</div>

				<div className='flex flex-col gap-1.5'>
					<div className='text-secondary dark:text-secondary-dark'>
						기술스택
					</div>
					<div className='flex flex-wrap gap-2'>
						{data.info.skills.map((skill) => (
							<div key={skill.id}> {skill.name}</div>
						))}
					</div>
				</div>

				<div className='flex flex-wrap gap-6'>
					<div className='flex flex-col gap-1.5'>
						<div className='text-secondary dark:text-secondary-dark'>
							참여인원
						</div>
						<div className='font-semibold'>{data.info.member}</div>
					</div>

					<div className='flex flex-col gap-1.5'>
						<div className='text-secondary dark:text-secondary-dark'>기간</div>
						<div className='font-semibold'>
							{`${data.info.startDate} - ${data.info.endDate}`}
						</div>
					</div>

					<div className='flex flex-col gap-1.5'>
						<div className='text-secondary dark:text-secondary-dark'>
							관련링크
						</div>
						<div className='flex gap-x-2'>
							{data.links?.map((link, index) => (
								<Link
									key={index}
									href={link.href}
									className='font-semibold text-secondary dark:text-secondary-dark hover:text-foreground underline underline-offset-4'
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className='flex h-[1px] bg-gradient-to-r from-foreground to-background my-8' />
			<div className='flex flex-col gap-6'>
				<div className='font-semibold text-lg'>상세 내용</div>
				<ol>
					{data.description.map((section, index) => (
						<li key={index} className='mb-6 space-y-2'>
							<div>{`${index + 1}. ${section.title}`}</div>
							{section.items && (
								<ul className='list-disc pl-5 space-y-1'>
									{section.items.map((item, itemIndex) => (
										<li
											key={itemIndex}
											className='text-secondary dark:text-secondary-dark'
										>
											{item}
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ol>
			</div>
		</>
	);
};

export default ProjectModalPage;

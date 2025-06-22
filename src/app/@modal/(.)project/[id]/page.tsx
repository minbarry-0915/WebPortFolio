'use client';

import { PROJECTDETAILDATA } from '@/app/(assets)/data/projectsDetail';
import { FolderIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Image from 'next/image';

const ProjectModalPage = () => {
	const { id } = useParams() as { id: string };
	console.log(id);

	const data = PROJECTDETAILDATA.find((project) => project.id === id);

	if (!data) {
		return (
			<>
				<p>해당 프로젝트 정보를 찾을 수 없습니다.</p>
			</>
		);
	}

	return (
		<>
			<h2 className='flex flex-col gap-7 mb-11'>
				<FolderIcon className='w-9 h-9 md:w-12 md:h-12 text-foreground stroke-1 shrink-0 ' />
				<div className='font-bold text-xl pr-4 '>{data.title}</div>
			</h2>

			<div id='project-info' className='flex flex-col gap-6 text-sm'>
				<div className='flex flex-col gap-1.5'>
					<div className='text-secondary dark:text-secondary-dark'>
						프로젝트 설명
					</div>
					<div className='font-semibold break-keep'>
						{data.info.description}
					</div>
				</div>
				{data.info.skills && (
					<div className='flex flex-col gap-1.5'>
						<div className='text-secondary dark:text-secondary-dark'>
							기술스택
						</div>

						<div className='flex flex-wrap gap-3'>
							{data.info.skills.map((skill) => (
								<div key={skill.id} className='relative w-9 h-9'>
									<Image
										src={skill.src}
										alt={skill.alt}
										fill
										className='object-contain rounded-md shadow-md'
									/>
								</div>
							))}
						</div>
					</div>
				)}

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
							{`${data.info.startDate} - ${data.info.endDate ?? '진행중'}`}
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
			<div className='flex flex-col gap-6 text-sm'>
				<div className='font-semibold text-lg'>상세 내용</div>
				<ol>
					{data.details.map((detail, index) => (
						<li key={index} className='mb-6 space-y-2'>
							<div>{`${index + 1}. ${detail.title}`}</div>
							{detail.items && (
								<ul className='list-disc pl-5 space-y-1'>
									{detail.items.map((item, itemIndex) => (
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

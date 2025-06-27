import { supabase } from '@/app/util/supabase/client';
import { FolderIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface PageProps {
	params: { id: string };
}

const ProjectModalPage = async ({ params }: PageProps) => {
	const { id } = await params;

	const { data, error } = await supabase
		.from('project_data_view')
		.select('*')
		.eq('id', id)
		.single();

	if (error) {
		console.error('Error fetching project data:', error);
		return <div>프로젝트 데이터를 불러오는 중 오류가 발생했습니다.</div>;
	}

	const project = data as ProjectData;

	return (
		<>
			<h2 className='flex flex-col gap-7 mb-11'>
				<FolderIcon className='w-9 h-9 md:w-12 md:h-12 text-foreground stroke-1 shrink-0 ' />
				<div className='font-bold text-3xl pr-4 '>{project.title}</div>
			</h2>

			<div
				id='project-info'
				className='flex flex-col gap-6 sm:text-base text-sm'
			>
				<div id='description' className='flex flex-col gap-1.5'>
					<div className='dark:font-extralight text-secondary dark:text-secondary-dark'>
						프로젝트 설명
					</div>
					<div className='font-medium dark:font-normal'>
						{project.description}
					</div>
				</div>

				{project.skills?.length > 0 && (
					<div id='skills' className='flex flex-col gap-1.5'>
						<div className='dark:font-extralight text-secondary dark:text-secondary-dark'>
							기술스택
						</div>
						<div className='flex flex-wrap gap-3'>
							{project.skills.map((skill: SkillData) => (
								<div
									key={skill.id}
									className='relative w-9 h-9 rounded-md shadow-md'
								>
									<Image
										src={skill.src}
										alt={skill.name}
										fill
										className='object-contain rounded-md'
									/>
								</div>
							))}
						</div>
					</div>
				)}

				<div className='flex flex-wrap gap-6'>
					<div id='member' className='flex flex-col gap-1.5'>
						<div className='dark:font-extralight text-secondary dark:text-secondary-dark'>
							참여인원
						</div>
						<div className='font-medium dark:font-normal'>{data.member}</div>
					</div>

					<div id='period' className='flex flex-col gap-1.5'>
						<div className='dark:font-extralight text-secondary dark:text-secondary-dark'>
							기간
						</div>
						<div className='font-medium dark:font-normal'>
							{`${data.startDate} - ${data.endDate ?? '진행중'}`}
						</div>
					</div>

					<div id='links' className='flex flex-col gap-1.5'>
						<div className='dark:font-extralight text-secondary dark:text-secondary-dark'>
							관련링크
						</div>
						<div className='flex gap-x-2 flex-wrap'>
							{data.links?.map(
								(link: { label: string; url: string }, index: number) => (
									<Link
										key={index}
										href={link.url}
										target='_blank'
										rel='noopener noreferrer'
										className='font-medium dark:font-normal text-secondary dark:text-secondary-dark hover:text-foreground underline underline-offset-4'
									>
										{link.label}
									</Link>
								)
							)}
						</div>
					</div>
				</div>
			</div>

			<div
				id='separator'
				className='w-full h-[1px] bg-gradient-to-r from-background to-background my-8'
			/>

			<div id='body' className='flex flex-col gap-12 sm:text-base text-sm'>
				<div id='overview' className='flex flex-col'>
					<div className='font-semibold sm:text-xl text-lg mb-3'>🗂️ 개요</div>
					<div className='flex flex-col gap-1 text-secondary dark:text-secondary-dark dark:font-extralight'>
						{project.overview.map((text: string, index: number) => (
							<p key={index}>{text}</p>
						))}
					</div>
				</div>

				<div id='details' className='flex flex-col'>
					<div className='font-semibold sm:text-xl text-lg mb-3'>
						🛠️ 활동 내용
					</div>
					<ol className='flex flex-col gap-4'>
						{project.details.map((detail: ProjectDetailData, index: number) => (
							<li key={index} className='space-y-2'>
								<div className='font-medium'>{`${index + 1}. ${
									detail.title
								}`}</div>
								{detail.images?.map((image, index) => (
									<div
										key={index}
										className='relative w-full sm:aspect-[16/9] aspect-[4/3]'
									>
										<Zoom>
											<Image
												alt={image.alt}
												src={image.src}
												fill
												className='object-contain rounded-md'
											/>
										</Zoom>
									</div>
								))}
								{detail.description && (
									<ul className='list-disc pl-5 space-y-1 dark:font-extralight'>
										{detail.description.map(
											(item: string, itemIndex: number) => (
												<li
													key={itemIndex}
													className='text-secondary dark:text-secondary-dark'
												>
													{item}
												</li>
											)
										)}
									</ul>
								)}
							</li>
						))}
					</ol>
				</div>

				<div id='troubleshooting' className='flex flex-col'>
					<div className='font-semibold sm:text-xl text-lg mb-3'>
						🧠 문제 해결
					</div>
					<ol className='flex flex-col gap-4'>
						{data.troubleshooting?.map(
							(trouble: ProjectTrouble, index: number) => (
								<div key={index} className='font-medium'>{`${index + 1}. ${
									trouble.title
								}`}</div>
							)
						)}
					</ol>
				</div>
			</div>
		</>
	);
};

export default ProjectModalPage;

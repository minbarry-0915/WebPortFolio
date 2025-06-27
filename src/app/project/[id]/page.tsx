import { supabase } from '@/app/util/supabase/client';
import { FolderIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

// SSG 대상 경로 정의
export async function generateStaticParams() {
	const { data, error } = await supabase.from('project').select('id');

	if (error) {
		console.error('Failed to fetch project IDs:', error);
		return [];
	}

	return data?.map((project) => ({
		id: project.id.toString(),
	}));
}

// ISR 설정
export const revalidate = 60; // 60초마다 경로 재생성

// SSG 렌더 페이지
export default async function ProjectModalPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const { data, error } = await supabase
		.from('project_data_view')
		.select('*')
		.eq('id', id)
		.single();

	if (error || !data) {
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
				{/* 설명 */}
				<div id='description' className='flex flex-col gap-1.5'>
					<div className='dark:font-extralight text-secondary dark:text-secondary-dark'>
						프로젝트 설명
					</div>
					<div className='font-medium dark:font-normal'>
						{project.description}
					</div>
				</div>

				{/* 기술스택 */}
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

				{/* 인원, 기간, 링크 */}
				<div className='flex flex-wrap gap-6'>
					<div id='member' className='flex flex-col gap-1.5'>
						<div className='dark:font-extralight text-secondary dark:text-secondary-dark'>
							참여인원
						</div>
						<div className='font-medium dark:font-normal'>{project.member}</div>
					</div>

					<div id='period' className='flex flex-col gap-1.5'>
						<div className='dark:font-extralight text-secondary dark:text-secondary-dark'>
							기간
						</div>
						<div className='font-medium dark:font-normal'>
							{`${project.startDate} - ${project.endDate ?? '진행중'}`}
						</div>
					</div>

					<div id='links' className='flex flex-col gap-1.5'>
						<div className='dark:font-extralight text-secondary dark:text-secondary-dark'>
							관련링크
						</div>
						<div className='flex gap-x-2 flex-wrap'>
							{project.links?.map((link, i) => (
								<Link
									key={i}
									href={link.url}
									target='_blank'
									rel='noopener noreferrer'
									className='font-medium dark:font-normal text-secondary dark:text-secondary-dark hover:text-foreground underline underline-offset-4'
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>

			<div
				id='separator'
				className='w-full h-[1px] bg-gradient-to-r from-background to-background my-8'
			/>

			<div id='body' className='flex flex-col gap-12 sm:text-base text-sm'>
				{/* 개요 */}
				<div id='overview' className='flex flex-col'>
					<div className='font-semibold sm:text-xl text-lg mb-3'>🗂️ 개요</div>
					<div className='flex flex-col gap-1 text-secondary dark:text-secondary-dark dark:font-extralight'>
						{project.overview.map((text, i) => (
							<p key={i}>{text}</p>
						))}
					</div>
				</div>

				{/* 활동 내용 */}
				<div id='details' className='flex flex-col'>
					<div className='font-semibold sm:text-xl text-lg mb-3'>
						🛠️ 활동 내용
					</div>
					<ol className='flex flex-col gap-4'>
						{project.details.map((detail, index) => (
							<li key={index} className='space-y-2'>
								<div className='font-medium'>{`${index + 1}. ${
									detail.title
								}`}</div>

								{detail.images?.map((image, idx) => (
									<div
										key={idx}
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
										{detail.description.map((item, itemIndex) => (
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

				{/* 문제 해결 */}
				<div id='troubleshooting' className='flex flex-col'>
					<div className='font-semibold sm:text-xl text-lg mb-3'>
						🧠 문제 해결
					</div>
					<ol className='flex flex-col gap-4'>
						{project.troubleshooting?.map((trouble, index) => (
							<li key={index} className='font-medium'>
								{`${index + 1}. ${trouble.title}`}
							</li>
						))}
					</ol>
				</div>
			</div>
		</>
	);
}

'use client';
import { useParams } from 'next/navigation';
import React from 'react';

const ProjectDummy = {
	'1': {
		title: 'React 앱 개발',
		description: 'React + Tailwind로 개발한 프로젝트입니다.',
	},
	'2': {
		title: 'Next.js 포트폴리오',
		description: 'App Router 기반 포트폴리오입니다.',
	},
};

const ProjectModalPage = () => {
	const { id } = useParams() as { id: string };
	console.log(id);

	const data = ProjectDummy[id as keyof typeof ProjectDummy];

	if (!data) {
		return (
			<>
				<p>해당 프로젝트 정보를 찾을 수 없습니다.</p>
			</>
		);
	}

	return (
		<>
			<h2 className='text-xl font-bold mb-2'>{data.title}</h2>
			<p>{data.description}</p>
			<p>{data.description}</p>
		</>
	);
};

export default ProjectModalPage;

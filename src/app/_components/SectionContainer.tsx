import { ReactNode } from 'react';
import SlideUpInView from './SlideUpInView';

interface SectionContainerProps {
	title: string;
	subtitle: string;
	children?: ReactNode;
}

const SectionContainer = ({
	title,
	subtitle,
	children,
}: SectionContainerProps) => {
	return (
		<SlideUpInView>
			<div className='w-full flex flex-col justify-center mb-60'>
				<p className='font-normal text-2xl leading-9 text-blue mb-[1.125rem]'>
					{title}
				</p>
				<h1 className='font-semibold text-4xl leading-12 text-black mb-9'>
					{subtitle}
				</h1>
				{children}
			</div>
		</SlideUpInView>
	);
};

export default SectionContainer;

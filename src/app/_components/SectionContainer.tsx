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
			<div className='w-full flex flex-col mb-30 md:mb-44'>
				<p className='font-normal text-base md:text-lg text-blue mb-2 md:mb-6'>
					{title}
				</p>
				<h1 className='font-semibold text-2xl md:text-3xl mb-6 md:mb-9'>
					{subtitle}
				</h1>
				{children}
			</div>
		</SlideUpInView>
	);
};

export default SectionContainer;

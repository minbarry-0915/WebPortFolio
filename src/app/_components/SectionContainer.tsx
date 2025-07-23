import { ReactNode } from 'react';
import SlideUpInView from './SlideUpInView';

interface SectionContainerProps {
	id: string;
	title: string;
	subtitle: string;
	children?: ReactNode;
}

const SectionContainer = ({
	id,
	title,
	subtitle,
	children,
}: SectionContainerProps) => {
	return (
		<section id={id} className='w-full flex flex-col py-12 sm:py-24'>
			<SlideUpInView>
				<p className='font-normal text-base md:text-lg text-blue mb-2 md:mb-6'>
					{title}
				</p>
				<h1 className='font-semibold text-2xl md:text-3xl mb-6 md:mb-9'>
					{subtitle}
				</h1>
				{children}
			</SlideUpInView>
		</section>
	);
};

export default SectionContainer;

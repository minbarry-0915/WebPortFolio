interface SeperatorProps {
	title?: string;
}

const Seperator = ({ title }: SeperatorProps) => {
	return (
		<div className='w-full flex items-center gap-4 mb-6 md:mb-9'>
			<div className='flex-1 h-[1px] bg-gradient-to-l from-secondary to-background' />
			{title && (
				<span className='whitespace-nowrap font-normal text-sm md:text-lg text-secondary dark:text-secondary-dark'>
					{title}
				</span>
			)}
			<div className='flex-3 h-[1px] bg-gradient-to-r from-secondary dark:from-secondary-dark to-background' />
		</div>
	);
};

export default Seperator;

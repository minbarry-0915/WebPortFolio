interface SeperatorProps {
	title?: string;
}

const Seperator = ({ title }: SeperatorProps) => {
	return (
		<div className='w-full flex items-center gap-4 mb-6 md:mb-9'>
			<div className='flex-1 h-[1px] bg-seperator dark:bg-seperator-dark' />
			{title && (
				<span className='whitespace-nowrap font-normal text-sm md:text-lg text-secondary dark:text-secondary-dark'>
					{title}
				</span>
			)}
			<div className='flex-3 h-[1px]  bg-seperator dark:bg-seperator-dark' />
		</div>
	);
};

export default Seperator;

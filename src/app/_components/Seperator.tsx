interface SeperatorProps {
	title: string;
}

const Seperator = ({ title }: SeperatorProps) => {
	return (
		<div className='w-full  flex items-center gap-4'>
			<div className='flex-1 h-[1px] bg-gradient-to-l from-black to-background' />
			<span className='whitespace-nowrap font-normal text-[1.125rem] text-black'>
				{title}
			</span>
			<div className='flex-3 h-[1px] bg-gradient-to-r from-black to-background' />
		</div>
	);
};

export default Seperator;

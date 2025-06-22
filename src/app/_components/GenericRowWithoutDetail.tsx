interface GenericRowWithoutDetailProps {
	item: CertificationRowProps | AwardRowProps;
}

// 자격증, 수상 내역용
const GenericRowWithoutDetail = ({ item }: GenericRowWithoutDetailProps) => {
	return (
		<div className='grid md:grid-cols-4 md:items-start'>
			<div className='flex items-center'>
				<p className='text-sm md:text-lg items-center mb-2 text-secondary dark:text-secondary-dark'>
					{item.issueDate}
				</p>
			</div>

			<div className='md:col-span-3 flex justify-center flex-col gap-1'>
				<div className='flex flex-row justify-start items-start gap-x-2'>
					<p className='text-base md:text-xl font-bold'>{item.title}</p>
				</div>
				<p className='text-sm md:text-lg text-secondary dark:text-secondary-dark'>
					{item.description}
				</p>
			</div>
		</div>
	);
};

export default GenericRowWithoutDetail;

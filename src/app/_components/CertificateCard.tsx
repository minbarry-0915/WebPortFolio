interface Certificate {
	title: string;
	description?: string;
	date: string;
}

interface CertificateCardProps {
	item: Certificate;
}

const CertificateCard = ({ item }: CertificateCardProps) => {
	return (
		<div className='grid md:grid-cols-3 md:items-start'>
			<div className='flex items-center'>
				<p className='text-[1.125rem] leading-6 mb-3'>{item.date}</p>
			</div>

			<div className='md:col-span-2 flex justify-center flex-col gap-1'>
				<div className='flex flex-row justify-start items-start gap-x-2'>
					<p className='text-2xl font-bold leading-9'>{item.title}</p>
				</div>
				<p className='text-[1.125rem] leading-[1.825rem] '>
					{item.description}
				</p>
			</div>
		</div>
	);
};

export default CertificateCard;

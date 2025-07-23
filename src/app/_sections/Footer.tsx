const Footer = () => {
	return (
		<footer className='flex flex-col py-12 sm:py-24 justify-center items-center w-full'>
			<h1 className='font-semibold text-2xl md:text-3xl mb-6 md:mb-9'>
				Contact
			</h1>
			<div className='flex gap-6 items-center'>
				<div className='text-sm md:text-xl items-center text-secondary dark:text-secondary-dark'>
					Email
				</div>
				<div className='font-normal text-sm md:text-xl'>
					jimin980915@naver.com
				</div>
			</div>
		</footer>
	);
};

export default Footer;

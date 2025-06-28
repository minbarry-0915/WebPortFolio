const MainSection = () => {
	return (
		<div
			id='main'
			className='w-full h-lvh flex flex-col items-center justify-center gap-[3.68rem] '
		>
			<h1 className='font-bold text-4xl md:text-5xl leading-tight md:leading-normal text-center break-keep'>
				안녕하세요,
				<br />
				프론트엔드 개발자
				<br />
				<span className='text-blue'>이지민</span>입니다.
			</h1>

			<p className='font-medium text-lg md:text-xl leading-tight md:leading-normal text-center '>
				React, ReactNative를 기반으로
				<br />
				<span className='text-blue'>고객 중심의 서비스</span>를 개발하고
				있습니다.
			</p>
		</div>
	);
};

export default MainSection;

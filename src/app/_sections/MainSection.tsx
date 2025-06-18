const MainSection = () => {
	return (
		<div
			id='main'
			className='w-full h-[100vh] flex flex-col items-center justify-center gap-[3.68rem]'
		>
			<h1 className='font-bold text-5xl md:text-6xl text-center leading-tight md:leading-[4rem] text-black break-keep'>
				안녕하세요,
				<br />
				프론트엔드 개발자
				<br />
				<span className='text-blue'>이지민</span>입니다.
			</h1>

			<p className='font-medium text-2xl text-center leading-[2.25rem]  text-black'>
				React, ReactNative를 기반으로
				<br />
				<span className='text-blue'>고객 중심의 서비스</span>를 개발하고
				있습니다.
			</p>
		</div>
	);
};

export default MainSection;

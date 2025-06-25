'use client';

import { useState, useRef, useEffect, CSSProperties } from 'react';

// 탭 라벨 및 연결된 섹션 ID 배열
const tabs = ['기술', '경력', '프로젝트', '교육', '수상'];
const sectionIds = [
	'skill',
	'experience',
	'projectDetail',
	'education',
	'award',
];

const Header = () => {
	// 현재 활성화된 탭 인덱스
	const [activeIndex, setActiveIndex] = useState<number>(0);

	// 각 탭 버튼 DOM 요소를 참조할 ref 배열
	const tabRefs = useRef<HTMLButtonElement[]>([]);

	// 인디케이터 스타일: 위치(left), 너비(width), 높이(height)
	const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({
		left: 0,
		width: 0,
		height: 0,
	});

	// 클릭으로 이동 중일 때 true로 설정 (IntersectionObserver와 충돌 방지)
	const [isUserScrolling, setIsUserScrolling] = useState(false);

	// 탭 인디케이터 위치 및 크기 갱신 (activeIndex 변경 시)
	useEffect(() => {
		const el = tabRefs.current[activeIndex];
		if (el) {
			const { offsetLeft, offsetWidth, offsetHeight } = el;
			setIndicatorStyle({
				left: offsetLeft,
				width: offsetWidth,
				height: offsetHeight,
			});
		}
	}, [activeIndex]);

	// 섹션 스크롤에 따라 자동으로 activeIndex 갱신
	useEffect(() => {
		// 클릭으로 스크롤 중이면 무시
		if (isUserScrolling) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						const index = sectionIds.indexOf(entry.target.id);
						if (index !== -1) {
							setActiveIndex(index);
						}
						break; // 한 섹션만 감지되면 종료
					}
				}
			},
			{
				root: null, // viewport 기준
				threshold: 0.5, // 50% 이상 보여야 감지
				rootMargin: '-80px 0px 0px 0px', // 고정 헤더 보정 (헤더가 겹쳐도 정확히 감지)
			}
		);

		// 각 섹션 요소 관찰 시작
		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		// 컴포넌트 unmount 시 observer 해제
		return () => observer.disconnect();
	}, [isUserScrolling]);

	// 탭 클릭 시 섹션으로 스크롤 이동
	const onClick = (index: number) => {
		setIsUserScrolling(true); // observer 일시 중지
		setActiveIndex(index); // 탭 스타일 미리 반영

		const targetId = sectionIds[index];
		const targetEl = document.getElementById(targetId);

		if (targetEl) {
			requestAnimationFrame(() => {
				const y = targetEl.getBoundingClientRect().top + window.scrollY;

				window.scrollTo({
					top: y - 140, // 고정 헤더 높이만큼 보정
					behavior: 'smooth',
				});

				// 일정 시간 후 observer 재작동
				setTimeout(() => {
					setIsUserScrolling(false);
				}, 600); // 스크롤 애니메이션 시간 고려
			});
		} else {
			setIsUserScrolling(false); // 예외 방어
		}
	};

	return (
		<header className='relative w-full max-w-[29rem]'>
			<div className='flex px-3 py-1 items-center justify-between bg-header-light/50 dark:bg-header-dark/50 rounded-3xl gap-2 shadow-md backdrop-blur-xs dark:backdrop-blur-lg'>
				{tabs.map((label, index) => (
					<button
						key={label}
						ref={(el) => {
							if (el) tabRefs.current[index] = el;
						}}
						onClick={() => onClick(index)}
						className={`flex-1 z-1 text-center font-semibold text-sm py-2 rounded-3xl cursor-pointer transition-all duration-200 text-foreground 
						}`}
					>
						{label}
					</button>
				))}
				{/* 슬라이드 배경 바 */}
				<div
					className='absolute left-0  bg-white dark:bg-header-item-dark rounded-3xl z-0 transition-all duration-300'
					style={{
						width: `${indicatorStyle.width}px`,
						transform: `translateX(${indicatorStyle.left}px)`,
						height: `${indicatorStyle.height}px`,
					}}
				/>
			</div>
		</header>
	);
};

export default Header;

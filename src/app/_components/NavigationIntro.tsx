"use client";

import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
// import { useMediaQuery } from "react-responsive";

interface NavigationIntroProps {
	targetElementId: "introduce" | "skill";
}
const NavigationIntro = ({ targetElementId }: NavigationIntroProps) => {
	// const isMobile = useMediaQuery({ maxWidth: 768 });

	const onClick = () => {
		const targetEl = document.getElementById(targetElementId);

		if (targetEl) {
			requestAnimationFrame(() => {
				const y = targetEl.getBoundingClientRect().top + window.scrollY;

				window.scrollTo({
					// top: isMobile ? y : y - 50, // 고정 헤더 높이만큼 보정
					top: y,
					behavior: "smooth",
				});
			});
		}
	};

	return (
		<motion.button
			onClick={onClick}
			initial={{ y: 0, opacity: 1 }}
			animate={{ y: [0, 10, 0] }}
			transition={{
				duration: 1.5,
				repeat: Infinity,
				ease: "easeInOut",
			}}
			className='flex flex-col items-center text-gray-500 dark:text-gray-300 absolute bottom-20 z-100'
		>
			<ChevronDoubleDownIcon className='w-6 h-6' />
		</motion.button>
	);
};

export default NavigationIntro;

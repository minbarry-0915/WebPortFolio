import { ReactNode } from 'react';
import {
	ComputerDesktopIcon,
	DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';

interface WebMobileIconProps {
	webMobile: ProjectRowProps['webMobile'];
}

const WebMobileIcon = ({ webMobile }: WebMobileIconProps): ReactNode => {
	switch (webMobile) {
		case 'webMobile':
			return <></>;
		case 'web':
			return (
				<ComputerDesktopIcon className='w-6 h-6 md:w-7 md:h-7 text-foreground stroke-1 shrink-0' />
			);
		case 'mobile':
			return (
				<DevicePhoneMobileIcon className='w-6 h-6 md:w-7 md:h-7 text-foreground stroke-1 shrink-0' />
			);
	}
};
export default WebMobileIcon;

import ModalLayout from '@/app/_components/ModalLayout';
import { ReactNode } from 'react';

const ProjectModalLayout = ({ children }: { children: ReactNode }) => {
	return <ModalLayout>{children}</ModalLayout>;
};

export default ProjectModalLayout;

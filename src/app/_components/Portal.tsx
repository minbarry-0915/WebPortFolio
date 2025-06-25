'use client';

import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
	children: ReactNode;
}

const Portal = ({ children }: PortalProps) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const el = document.getElementById('portal-root') ?? document.body;
	return createPortal(children, el);
};

export default Portal;

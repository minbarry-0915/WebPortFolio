import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		domains: ['arbwgfsossidkialfitm.supabase.co'],
	},
	allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
};

export default nextConfig;

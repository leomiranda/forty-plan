'use client';

import { useUser } from '@clerk/nextjs';

export default function WelcomeMessage() {
	const { user, isLoaded } = useUser();

	if (!isLoaded) return null;

	return (
		<div className="text-white space-y-2 text-sm mb-4">
			<h2 className="text-2xl lg:text-4xl font-bold">
				Welcome back{isLoaded && ', '}
				{user?.firstName}
			</h2>
			<p className="text-sm lg:text-base text-blue-300">
				This os your Financial Overview Report
			</p>
		</div>
	);
}

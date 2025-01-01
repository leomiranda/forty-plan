'use client';

import { useState } from 'react';
import { useMedia } from 'react-use';
import NavigationButton from './navigation-button';
import { usePathname, useRouter } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

const routes = [
	{ label: 'Overview', href: '/' },
	{ label: 'Transactions', href: '/transactions' },
	{ label: 'Accounts', href: '/accounts' },
	{ label: 'Categories', href: '/categories' },
	{ label: 'Settings', href: '/settings' },
];

export default function Navigation() {
	const pathname = usePathname();
	const router = useRouter();
	const isMobile = useMedia('(max-width: 1024px)', false);
	const [isOpen, setIsOpen] = useState(false);

	function onClick(href: string) {
		router.push(href);
		setIsOpen(false);
	}

	if (isMobile) {
		return (
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<Button
						variant="ghost"
						size="icon"
						className="bg-white/20 hover:bg-white/30 transition-all duration-300 text-white hover:text-white border-none focus-visible:ring-0 focus-visible:ring-offset-0 outline-none"
					>
						<Menu className="w-4 h-4" />
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="px-2">
					<nav className="flex flex-col gap-y-2 pt-6">
						{routes.map((route) => (
							<Button
								key={route.href}
								onClick={() => onClick(route.href)}
								variant={pathname === route.href ? 'secondary' : 'ghost'}
								size="sm"
								className="w-full justify-start"
							>
								{route.label}
							</Button>
						))}
					</nav>
				</SheetContent>
			</Sheet>
		);
	}

	return (
		<nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
			{routes.map((route) => (
				<NavigationButton
					key={route.href}
					href={route.href}
					label={route.label}
					isActive={pathname === route.href}
				/>
			))}
		</nav>
	);
}

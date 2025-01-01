import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from './ui/button';

interface NavigationButtonProps {
	href: string;
	label: string;
	isActive: boolean;
}

export default function NavigationButton({
	href,
	label,
	isActive,
}: NavigationButtonProps) {
	return (
		<Button
			asChild
			size="sm"
			variant="ghost"
			className={cn(
				'text-white px-4 py-2 rounded-md hover:bg-white/10 hover:text-white border-none focus-visible:ring-0 focus-visible:ring-offset-0 outline-none focus:bg-white/20 transition-colors',
				isActive ? 'bg-white/10' : 'bg-transparent'
			)}
		>
			<Link href={href}>{label}</Link>
		</Button>
	);
}

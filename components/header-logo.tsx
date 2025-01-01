import Link from 'next/link';
import Image from 'next/image';

export default function HeaderLogo() {
	return (
		<Link href="/">
			<div className="items-center gap-x-2 hidden lg:flex">
				<Image src="/logo.svg" alt="Logo" width={40} height={40} />
				<span className="text-2xl font-bold text-blue-950 tracking-tighter">
					Forty<span className="text-white">Plan</span>
				</span>
			</div>
		</Link>
	);
}

import { ClerkLoaded, ClerkLoading, SignIn } from '@clerk/nextjs';
import { Loader2 } from 'lucide-react';

export default function Page() {
	return (
		<div className="flex justify-center py-24">
			<ClerkLoaded>
				<SignIn signUpUrl="/sign-up" />
			</ClerkLoaded>
			<ClerkLoading>
				<Loader2 className="animate-spin text-muted-foreground" />
			</ClerkLoading>
		</div>
	);
}

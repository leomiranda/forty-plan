'use client';

import { Button } from '@/components/ui/button';
import { useGetAccounts } from '@/features/accounts/api/use-get-accounts';
import { useNewAccountStore } from '@/features/accounts/hooks/use-new-account';

export default function Home() {
	const { data: accounts, isLoading } = useGetAccounts();
	const { onOpen } = useNewAccountStore();

	if (isLoading) return <div>Loading...</div>;

	return (
		<div className="py-4">
			<h1 className="text-2xl font-bold">Accounts</h1>
			<Button onClick={onOpen}>New Account</Button>
			{accounts?.map((account) => (
				<div key={account.id}>{account.name}</div>
			))}
		</div>
	);
}

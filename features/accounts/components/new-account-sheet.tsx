import { useNewAccountStore } from '@/features/accounts/hooks/use-new-account';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';

export function NewAccountSheet() {
	const { isOpen, onClose } = useNewAccountStore();

	return (
		<Sheet open={isOpen} onOpenChange={onClose}>
			<SheetContent className="space-y-4">
				<SheetHeader>
					<SheetTitle>New Account</SheetTitle>
					<SheetDescription>
						Create a new account to start tracking your finances.
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
}

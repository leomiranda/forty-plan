type DashboardLayoutProps = {
	children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<>
			<main className="px-3 lg:px-14">{children}</main>
		</>
	);
}

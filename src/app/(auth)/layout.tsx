import Navbar from "@/components/common-navbar";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
export const metadata: Metadata = {
	title: "Auth | Our Freedom",
	description: "our freedom authentication page",
};

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}

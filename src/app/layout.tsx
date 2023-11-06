import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
	title: "Home | Our Freedom",
	description: "our freedom homepage",
};

const NoSSR = dynamic(() => import("@/components/root-navbar"), {
	ssr: true,
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={lato.className}>
				<NoSSR />
				{children}
			</body>
		</html>
	);
}

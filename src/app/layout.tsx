import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { cn } from "@/lib/utils";
import { ClientProviders } from "./client-providers";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = { title: "AI Developer" };

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					geistSans.variable,
					geistMono.variable,
					"font-sans bg-background text-foreground antialiased",
				)}
			>
				<ClientProviders>
					<NuqsAdapter>{children}</NuqsAdapter>
				</ClientProviders>
			</body>
		</html>
	);
}

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
    title: "LegalAI - Managed Legal Platform",
    description: "A single platform to manage every part of your legal work.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}

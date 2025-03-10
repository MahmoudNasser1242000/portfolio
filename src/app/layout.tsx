import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "My Portfolio",
    description: "Created by Mahmoud Nasser => (Frontend Developer)",
    keywords: "portfolio, frontend, developer, website, development, react.js, javascript, js, es6, html, css, next.js, jQuery, bootstrap, tailwind, cv"
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head>
                <link rel="icon" href="/assets/images/favicon.svg" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}

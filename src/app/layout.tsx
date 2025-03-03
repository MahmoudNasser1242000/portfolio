import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer/Footer";
import { cn } from "@/lib/utils";
import { ToastContainer } from 'react-toastify';
import GoToTop from "@/components/Go-To-Top/GoToTop";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/assets/images/favicon.svg" />
      </head>
      <body
        className={cn(geistSans.variable, geistMono.variable, `antialiased overflow-x-hidden selection:bg-primary selection:text-white`)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          <Footer />
          <GoToTop />
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}

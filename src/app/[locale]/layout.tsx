import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer/Footer";
import { cn } from "@/lib/utils";
import { ToastContainer } from 'react-toastify';
import GoToTop from "@/components/Go-To-Top/GoToTop";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

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
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="scroll-smooth">
      <head>
        <link rel="icon" href="/assets/images/favicon.svg" />
        <meta charSet="UTF-8" />
      </head>
      <body
        className={cn(geistSans.variable, geistMono.variable, `antialiased overflow-x-hidden selection:bg-primary selection:text-white`)}
      >
        <NextIntlClientProvider messages={messages}>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

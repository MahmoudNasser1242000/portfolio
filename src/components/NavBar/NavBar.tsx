"use client";

import { useState } from "react";
import Image from "next/image";

// shadcn/ui components
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

import logo from "../../../public/assets/images/logo.png";
import { navLinks } from "@/constants/navLinks";
import { INavLinksAndSocialMedia } from "@/types/interfaces";
import { cn } from "@/lib/utils";

export default function NavBar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="border-b bg-white dark:bg-black">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
                {/* Logo */}
                <a href="/">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={200}
                        height={200}
                        className="object-cover"
                    />
                </a>

                {/* Desktop Nav Links */}
                <div className="mx-auto hidden space-x-6 md:flex">
                    {navLinks.map(({ title, href }: { title: string, href: string }) => (
                        <a
                            key={href}
                            href={href}
                            className="text-md font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                        >
                            {title}
                        </a>
                    ))}
                </div>

                {/* Dark Mode Toggle + Mobile Menu */}
                <div className="flex items-center space-x-2">
                    <ModeToggle />

                    {/* Mobile Menu Button (hidden on desktop) */}
                    <div className="md:hidden">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="sm:w-[40%] md:w-[50%] w-[60%]  bg-white dark:bg-black">
                                <SheetHeader>
                                    <SheetTitle className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                        <Image
                                            src={logo}
                                            alt="Logo"
                                            width={200}
                                            height={200}
                                            className="object-cover mt-[-20px] ml-[-20px]"
                                        />
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="mt-2 flex flex-col space-y-4">
                                    {navLinks.map(({ title, href, icon: Icon }: INavLinksAndSocialMedia) => (
                                        <a
                                            key={href}
                                            href={href}
                                            className={cn(
                                                "px-4 py-2 rounded-lg transition-colors", buttonVariants({ variant: "ghost" })
                                            )}
                                        >
                                            <span className="w-full flex items-center justify-start space-x-2">
                                                <span><Icon /></span>
                                                <span>{title}</span>
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
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

import logo from "../../../public/assets/images/main_logo.svg";
import { navLinks, navLinksAr } from "@/constants/navLinks";
import { INavLinksAndSocialMedia } from "@/types/interfaces";
import { cn } from "@/lib/utils";
import { Link } from "react-scroll"
import LangBtn from "../Lang-Btn/LangBtn";
import { useParams } from "next/navigation";

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const params = useParams();
    const locale = params.locale;
    const [list, setList] = useState(navLinks);

    useEffect(() => {
        if (locale === "ar") {
            setList(navLinksAr)
        } else {
            setList(navLinks)
        }
    }, [locale]);

    return (
        <nav className="fixed top-0 left-0 z-50 nav w-full border-b bg-white dark:bg-black">
            <div className="mx-auto flex max-w-screen-xl h-full items-center justify-between px-4">
                {/* Logo */}
                <Link to="home" smooth={true} duration={500}>
                    <Image
                        src={logo}
                        alt="Logo"
                        width={210}
                        height={210}
                        className="object-cover mb-3"
                    />
                </Link>

                {/* Desktop Nav Links */}
                <div className="mx-auto hidden gap-x-6 md:flex">
                    {list.map(({ title, href }: { title: string, href: string }) => (
                        <Link
                            key={href}
                            to={href}
                            smooth={true}
                            duration={500}
                            className="text-md font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                        >
                            {title}
                        </Link>
                    ))}
                </div>

                {/* Dark Mode Toggle + Mobile Menu */}
                <div className="flex items-center gap-x-2">
                    <div className="hidden md:block">
                        <LangBtn />
                    </div>
                    <ModeToggle />

                    {/* Mobile Menu Button (hidden on desktop) */}
                    <div className="md:hidden">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side={locale === "ar"? "right" : "left"} className="sm:w-[40%] md:w-[50%] w-[60%]  bg-white dark:bg-black">
                                <SheetHeader>
                                    <SheetTitle className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                        <Image
                                            src={logo}
                                            alt="Logo"
                                            width={200}
                                            height={200}
                                            className={`object-cover ${locale === "ar"? "mt-[-17px]" : "mt-[-20px]"} ${locale === "ar"? "mr-[25px]" : "ml-[-20px]"}`}
                                        />
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="mt-2 flex flex-col gap-y-4">
                                    {list.map(({ title, href, icon: Icon }: INavLinksAndSocialMedia) => (
                                        <Link
                                            key={href}
                                            to={href}
                                            className={cn(
                                                "px-4 py-2 rounded-lg transition-colors", buttonVariants({ variant: "ghost", className: "px-4" })
                                            )}
                                        >
                                            <span className="w-full flex items-center justify-start gap-x-2">
                                                <span><Icon /></span>
                                                <span>{title}</span>
                                            </span>
                                        </Link>
                                    ))}
                                    <div className="w-full">
                                        <LangBtn />
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}

"use client"
import React from "react";
import { socialMedia } from "@/constants/socialMedia";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { navLinks } from "@/constants/navLinks";
import { INavLinksAndSocialMedia } from "@/types/interfaces";
import logo from "../../../public/assets/images/main_logo.svg";
import Image from "next/image";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <>
            <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
                <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="flex justify-center mb-1">
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                        >
                            <Image src={logo} alt="log" width={360} height={360} className="object-cover" />
                        </Link>
                    </div>

                    <p className="mx-auto max-w-md text-center leading-relaxed text-gray-500">
                        You can contact me and also explore more of my work through my social media links. I will be happy to respond to you and hear all your opinions.
                    </p>

                    <ul className="mt-6 flex flex-wrap justify-center gap-6">
                        {navLinks.map(({ title, href }: { title: string, href: string }) => (
                            <Link
                                key={href}
                                to={href}
                                smooth={true}
                                duration={500}
                                className="text-lg font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                            >
                                <span>{title}</span>
                            </Link>
                        ))}
                    </ul>

                    <ul className="mt-6 flex justify-center gap-x-5 md:gap-8">
                        {
                            socialMedia.map(({ title, href, icon: Icon }: INavLinksAndSocialMedia) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-300 dark:hover:text-gray-300/75"
                                    >
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Icon className="size-6" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>{title}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default Footer;

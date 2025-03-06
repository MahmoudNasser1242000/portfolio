"use client"
import React, { useEffect, useState } from "react";
import { socialMedia } from "@/constants/socialMedia";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { navLinks, navLinksAr } from "@/constants/navLinks";
import { INavLinksAndSocialMedia } from "@/types/interfaces";
import { Link } from "react-scroll";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { PaintbrushVertical } from "lucide-react";

const Footer = () => {
    const t = useTranslations("Footer");
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
        <>
            <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
                <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="flex justify-center mb-1">
                        <p className="text-primary text-[36px] font-[900] py-4">
                            <Link to="home" smooth={true} duration={500}>
                                {/*<Image
                            src={logo}
                            alt="Logo"
                            width={210}
                            height={210}
                            className="object-cover mb-3"
                        />*/}
                                My Prort<PaintbrushVertical className="inline size-9" />Folio
                            </Link>
                        </p>
                    </div>

                    <p className="mx-auto max-w-md text-center leading-relaxed text-gray-500">
                        {t("desc")}
                    </p>

                    <ul className="mt-6 flex flex-wrap justify-center gap-6">
                        {list.map(({ title, href }: { title: string, href: string }) => (
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

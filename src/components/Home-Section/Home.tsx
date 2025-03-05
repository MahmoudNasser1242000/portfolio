import React from "react";
import { socialMedia } from "@/constants/socialMedia";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { INavLinksAndSocialMedia } from "@/types/interfaces";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Download } from "lucide-react";
import { Effect } from "../ui/effects";
import SectionLinks from "../Section-Links/SectionLinks";
import TextAnimation from "../Text-Animation/TextAnimation";
import HomeImage from "./Home-Image/HomeImage";
import { useTranslations } from "next-intl";

const Home = () => {
    const t = useTranslations("HomeSection")
    return <div id="home" className="pb-16 pt-36 px-6 sm:px-[70px] md:px-20 lg:px-16 flex justify-center">
        <div className="flex gap-y-12 flex-col-reverse lg:flex-row items-center justify-between w-[95%] sm:w-auto">
            {/* Personal Info */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-10">
                <ul className="mx-auto sm:mx-0 px-12 sm:px-3 sm:mb-0 py-2 sm:py-3 flex flex-row sm:flex-col items-center sm:justify-center gap-4 border border-1 rounded-md">
                    {
                        socialMedia.slice(0, 3).map(({ title, href, icon: Icon }: INavLinksAndSocialMedia) => (
                            <li key={href} className="">
                                <a
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    className="text-gray-700 flex items-center transition hover:text-gray-700/75 dark:text-gray-300 dark:hover:text-gray-300/75"
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
                <div className="px-6 sm:px-0">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
                        {t("title")} <TextAnimation title1={t("text-animation1")} title2={t("text-animation2")} />
                    </h1>
                    <p className="text-lg my-4 text-gray-600 dark:text-gray-300">
                        {t("job")}
                    </p>
                    <p className="text-lg text-gray-500 w-full lg:w-[80%] flex flex-col space-y-3">
                        <span className="w-full">
                            {t("presentation1")}
                        </span>

                        <span className="w-full">
                            {t("presentation2")}
                        </span>
                    </p>
                    <div className="mt-6 flex items-center gap-x-4">
                        <SectionLinks link="projects" title={t("myWorks")} />
                        <a
                            href="/assets/files/Mahmoud-Nasser-CV.pdf"
                            target="_blank"
                            download
                            className={cn("transition-colors", buttonVariants({ variant: "outline", size: "lg" }))}
                        >
                            <span>{t("cv")}</span>
                            <Download />
                        </a>
                    </div>
                </div>
            </div>

            {/* Profile Image */}
            <div className="flex items-center justify-center mt-6 sm:mt-0 w-full">
                <div className="w-[280px] h-[280px] relative translate-x-[-12px] sm:translate-x-0">
                    <Effect
                        variant={"square"}
                        size={"sm"}
                        className="top-[-11%] left-[25%] -rotate-12"
                    />
                    <Effect
                        variant={"square"}
                        size={"sm"}
                        className="top-[50%] right-[-14%] rotate-12"
                    />
                    <Effect
                        variant={"square"}
                        size={"sm"}
                        className="bottom-[18%] left-[-6%] rotate-12"
                    />

                    {/* Home Image */}
                    <HomeImage />
                </div>
            </div>
        </div>
    </div>
};
export default Home;
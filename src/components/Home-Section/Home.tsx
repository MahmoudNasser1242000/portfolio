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
import { CircleArrowRight, Download } from "lucide-react";
import logo from "../../../public/assets/images/profile.png";
import Image from "next/image";
import { Effect } from "../ui/effects";

const Home = () => {
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
                        Hi👋, I'm <span className="text-primary">Mahmoud Nasser</span>
                    </h1>
                    <p className="text-lg my-4 text-gray-600 dark:text-gray-300">
                        Frontend Developer
                    </p>
                    <p className="text-lg text-gray-500 w-full lg:w-[80%] flex flex-col space-y-3">
                        <span className="w-full">
                            Well-rounded front end development possessing excellent clerical and team support abilities.
                            Skilled in scheduling meetings and appointments and organizing office operations. Punctual
                            professional committed to satisfying customer needs and meeting office demands.
                        </span>
            
                        <span className="w-full">
                            Passionate and skilled Front-End Developer with a strong background in JavaScript, and
                            modern frameworks like React and Next.js. skilled in developing dynamic and responsive web
                            applications with a keen eye for detail and design.
                        </span>
                    </p>
                    <div className="mt-6 flex items-center space-x-4">
                        <a
                            href="#projects"
                            className={cn("transition-colors", buttonVariants({ variant: "default", size: "lg" }))}
                        >
                            <span>My Works</span>
                            <CircleArrowRight />
                        </a>
            
                        <a
                            href="/assets/files/Mahmoud-Nasser-CV.pdf"
                            target="_blank"
                            download
                            className={cn("transition-colors", buttonVariants({ variant: "outline", size: "lg" }))}
                        >
                            <span>Download CV</span>
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
                    <div className="size-full rounded-full relative">
                        <Effect className="size-full top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]" />
                        <Image
                            src={logo}
                            alt="profile img"
                            className="object-cover w-full h-full rounded-full ring-4 ring-primary ring-offset-[5px] ring-offset-background"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
};
export default Home;
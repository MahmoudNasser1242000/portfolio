import React from "react";
import { Effect } from "../ui/effects";
import { CircleArrowRight, Section } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import SectionTitle from "../Section-Title/SectionTitle";

const About = () => {
    return <div className="relative px-8 sm:px-0 flex items-center justify-center my-16">
        <Effect className="-left-32 md:-left-44 -top-12" />
        <div className="relative max-w-[50rem] bg-background/90 border px-8 py-6 rounded-[12px]">
            <Effect
                variant={"square"}
                size={"default"}
                className="-top-4 -right-5 rotate-12 z-[-10]"
            />
            <SectionTitle title="About Me" desc="A Quick Introduction About Me" />
            <p className="text-md text-gray-500 mt-6">
                <span>
                    I obtained a bachelor’s degree with distinction from the High Institute for Management and Information Technology - Kafr Elsheikh, I also obtained a certificate from Route Academy in Alexandria after one year of training in the field of frontend development.
                </span>
            </p>
            <div className="mt-6 flex items-end space-x-8">
                <p className="flex flex-col items-start">
                    <span className="text-[35px] font-bold">+2</span>
                    <span className="text-gray-600">Years Experience</span>
                </p>
                <p className="flex flex-col items-start">
                    <span className="text-[35px] font-bold">+12</span>
                    <span className="text-gray-600">Completed Projects</span>
                </p>
                <a
                    href="#skills"
                    className={cn("transition-colors mb-2", buttonVariants({ variant: "default", size: "lg" }))}
                >
                    <span>Discover Skills</span>
                    <CircleArrowRight />
                </a>
            </div>
        </div>
    </div>
};

export default About;

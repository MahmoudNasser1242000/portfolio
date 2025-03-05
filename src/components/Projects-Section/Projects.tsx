import React from "react";
import SectionTitle from "../Section-Title/SectionTitle";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { getProjects } from "@/lib/projects";
import CarouselItems from "./Carousel/Carousel";
import { Effect } from "../ui/effects";
import { getTranslations } from "next-intl/server";

const Projects = async () => {
    const projects = await getProjects();
    console.log('====================================');
    // console.log(projects);
    console.log('====================================');

    const t = await getTranslations("ProjectsSection");
    return <div className="relative px-8 sm:px-20 flex flex-col items-center justify-center my-28" id="projects">
        <Effect className="top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
        <SectionTitle
            title={t("title")}
            desc={t("desc")}
            className="justify-center items-center"
            h_size="30"
        />
        <div className="flex items-center justify-center mt-12 w-[80%]">
            <CarouselItems projects={projects}/>
        </div>

        <a href="https://github.com/MahmoudNasser1242000" target="_blank" className={cn("mt-8", buttonVariants({ variant: "default" }))}>
            {t("github")} <span className="ml-2">→</span>
        </a>
    </div>;
};

export default Projects;

"use client";
import React from "react";
import SectionTitle from "../Section-Title/SectionTitle";
import ProjectItem from "./Project-Item/ProjectItem";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay"
import { buttonVariants } from "../ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Projects = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return <div className="relative px-8 sm:px-20 flex flex-col items-center justify-center my-28" id="projects">
        <SectionTitle
            title="My Projects"
            desc="Some Web Projects I've Worked On"
            className="justify-center items-center"
            h_size="30"
        />
        <div className="flex items-center justify-center mt-12 w-[80%]">
            <Carousel
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center sm:flex-none sm:justify-normal">
                        <ProjectItem />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center sm:flex-none">
                        <ProjectItem />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center sm:flex-none">
                        <ProjectItem />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center sm:flex-none">
                        <ProjectItem />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center sm:flex-none">
                        <ProjectItem />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>

        <a href="https://github.com/MahmoudNasser1242000" target="_blank" className={cn("mt-8", buttonVariants({ variant: "default" }))}>
            See More Projects <span className="ml-2">→</span>
        </a>
    </div>;
};

export default Projects;

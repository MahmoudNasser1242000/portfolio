"use client";
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import { IProjects } from "@/types/interfaces";
import ProjectItem from "../Project-Item/ProjectItem";

const CarouselItems = ({ projects }: { projects: IProjects[] }) => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return <div dir="ltr">
        <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="w-[270px] sm:w-auto">
                {
                    projects.map((project) => (
                        <CarouselItem key={project._id} className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center sm:flex-none sm:justify-normal">
                            <ProjectItem project={project} />
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious className="top-[50%] translate-y-[-50%] left-[-40px] sm:left-[-50px]" />
            <CarouselNext className="top-[50%] translate-y-[-50%] right-[-40px] sm:right-[-50px]" />
        </Carousel>
    </div>;
};

export default CarouselItems;

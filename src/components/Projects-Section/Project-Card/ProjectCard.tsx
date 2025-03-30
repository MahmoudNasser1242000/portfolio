import { urlFor } from "@/sanity/lib/image";
import { IProjects } from "@/types/interfaces";
import Image from "next/image";
import React from "react";

const ProjectCard = ({project}: {project: IProjects}) => {
    return <div className="relative group h-[300px] rounded-sm border shadow hover:shadow-lg transition duration-300 ease-in-out overflow-hidden">
        <figure className="absolute top-0 left-0 size-full bg-gradient-to-t from-background/70 to-transparent transition duration-300 ease-in-out"/>
        <Image
            src={urlFor(project.images[0])
                // .width(400)
                // .height(450)
                .fit("crop") // optional: control cropping
                .url()}
            alt={`${project.title} project Image`}
            width={800}
            height={800}
            className="object-cover size-full rounded-sm group-hover:scale-105 transition duration-300 ease-in-out"
        />
        <h3 className="absolute bottom-3 left-4 text-foreground group-hover:text-primary transition duration-300 ease-in-out font-[600] text-md">
            {project.title}
        </h3>
    </div>;
};

export default ProjectCard;

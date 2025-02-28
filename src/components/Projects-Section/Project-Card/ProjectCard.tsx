import Image from "next/image";
import React from "react";

const ProjectCard = () => {
    return <div className="relative group h-[300px] rounded-sm border shadow hover:shadow-lg transition duration-300 ease-in-out overflow-hidden">
        <figure className="absolute top-0 left-0 size-full bg-gradient-to-t from-background/70 to-transparent transition duration-300 ease-in-out"/>
        <Image
            src="/assets/images/profile.png"
            alt="Project Image"
            width={400}
            height={400}
            className="object-cover size-full rounded-sm group-hover:scale-105 transition duration-300 ease-in-out"
        />
        <h3 className="absolute bottom-3 left-4 text-foreground group-hover:text-primary transition duration-300 ease-in-out font-[600] text-md">Project Title</h3>
    </div>;
};

export default ProjectCard;

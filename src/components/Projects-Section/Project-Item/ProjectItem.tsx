import React from "react";
import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"
import ProjectCard from "../Project-Card/ProjectCard";
import { IProjects } from "@/types/interfaces";
import DialogProjectContent from "../Dialog-Content/DialogContent";


const ProjectItem = ({ project }: { project: IProjects }) => {
    return <div className="cursor-pointer w-fit">
        <Dialog>
            <DialogTrigger>
                <ProjectCard project={project} />
            </DialogTrigger>
            <div className="px-6 sm:px-12 md:px-16 lg:px-20">
                <DialogProjectContent project={project} />
            </div>
        </Dialog>
    </div>;
};

export default ProjectItem;

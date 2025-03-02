import { client } from "@/sanity/lib/client";
import { IProjects } from "@/types/interfaces";

export const getProjects = async () => {
    const query = `
        *[_type=="projects"]{
            _id, 
            title, 
            images,
            description, 
            tags, 
            demoLink,
            githubLink, 
            isResponsive,
            publishedAt,
        }[]
    `
    const projects = await client.fetch(query);
    return projects as IProjects[];
}
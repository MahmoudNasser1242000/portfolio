import { client } from "@/sanity/lib/client";
import { ISkills, TCategory } from "@/types/interfaces";

export const getSkills = async (category: TCategory) => {
    const query = `
        *[_type=="skills" && category=="${category}"] {
            _id,  label, value, image, category
        }[]
    `;
    const data = await client.fetch(query);
    return data as ISkills[];
}
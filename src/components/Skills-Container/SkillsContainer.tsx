import { ISkills } from "@/types/interfaces";
import React from "react";
import SkillProgress from "../Skill-Progress/SkillProgress";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const SkillsContainer = ({
    skills,
    category,
}: {
    skills: ISkills[];
    category: string;
}) => {

    return (
        <div className="bg-background/40">
            <h2 className="text-primary font-bold text-[26px] border-b border-primary px-3 pb-2">
                {category}
            </h2>
            {skills.map((skill: ISkills) => (
                <div className="px-3 py-4" key={skill._id}>
                    <div className="flex items-center justify-between px-2">
                        <div className="w-fit flex items-center gap-2 mb-2">
                            {/* <Image
                                src={urlFor(skill.image)
                                    .width(40)
                                    .height(40)
                                    // .fit("crop") // optional: control cropping
                                    .url()}
                                alt={skill.label}
                                width={40}
                                height={40}
                                layout="responsive"
                            /> */}
                            <p className="font-light">{skill.label}</p>
                        </div>
                        <span className="font-light">{skill.value}%</span>
                    </div>
                    <p>
                        <SkillProgress value={skill.value} />
                    </p>
                </div>
            ))}
        </div>
    );
};
export default SkillsContainer;

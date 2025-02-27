import React from "react";
import SectionTitle from "../Section-Title/SectionTitle";
import { Effect } from "../ui/effects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { tabItems } from "@/constants/TabItems";
import SkillsContainer from "../Skills-Container/SkillsContainer";
import { getSkills } from "@/lib/skills";

const Skills = async () => {
    const frontendSkills = await getSkills("frontend");
    const toolsSkills = await getSkills("tools");

    return (
        <div className="relative px-8 sm:px-20 flex flex-col items-center justify-center my-24" id="skills">
            <SectionTitle
                title="My Skills"
                desc="My Technical Proficiency"
                className="justify-center items-center"
                h_size="30"
            />
            <Tabs defaultValue={tabItems[0].value} className="relative grid grid-cols-1 gap-4 md:grid-cols-3 pt-10 w-full">
                <Effect className="-right-20 md:-right-[235] top-[50%] translate-y-[-50%]"/>
                <TabsList className="flex flex-row md:flex-col gap-4 justify-center py-3 md:py-6 px-2 col-span-3 md:col-span-1 h-fit border bg-white dark:bg-black/30">
                    {
                        tabItems.map(({ title, value, icon: Icon }) => (
                            <TabsTrigger key={value} value={value} className="space-x-2 w-full rounded-sm data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black">
                                {<Icon className="h-6 w-6" />}
                                <span className="capitalize">{title}</span>
                            </TabsTrigger>
                        ))
                    }
                </TabsList>
                <div className="col-span-3 md:col-span-2 border border-primary rounded-sm">
                    <TabsContent value="frontend">
                        <SkillsContainer category="frontend" skills={frontendSkills} />
                    </TabsContent>
                    <TabsContent value="tools">
                        <SkillsContainer category="tools" skills={toolsSkills} />
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
};

export default Skills;
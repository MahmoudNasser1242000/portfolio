import React from "react";
import SectionTitle from "../Section-Title/SectionTitle";
import { Effect } from "../ui/effects";
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { tabItems } from "@/constants/TabItems";
import SkillsContainer from "./Skills-Container/SkillsContainer";
import { getSkills } from "@/lib/skills";
import { getTranslations } from "next-intl/server";
import TabSkillsList from "./Tab-List/TabList";

const Skills = async () => {
    const frontendSkills = await getSkills("frontend");
    const toolsSkills = await getSkills("tools");

    const t = await getTranslations("SkillsSection");

    return (
        <div className="relative px-8 sm:px-20 flex flex-col items-center justify-center my-24" id="skills">
            <SectionTitle
                title={t("title")}
                desc={t("desc")}
                className="justify-center items-center"
                h_size="30"
            />
            <Tabs defaultValue={tabItems[0].value} className="relative grid grid-cols-1 gap-4 md:grid-cols-3 pt-10 w-full">
                <Effect className="-right-20 md:-right-[235] top-[50%] translate-y-[-50%]"/>
                <TabSkillsList />
                <div className="col-span-3 md:col-span-2 border border-primary rounded-sm">
                    <TabsContent value="frontend">
                        <SkillsContainer category={t("frontend")} skills={frontendSkills} />
                    </TabsContent>
                    <TabsContent value="tools">
                        <SkillsContainer category={t("tools")} skills={toolsSkills} />
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
};

export default Skills;
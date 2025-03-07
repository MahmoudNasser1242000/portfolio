import React from "react";
import { Effect } from "../ui/effects";
import SectionTitle from "../Section-Title/SectionTitle";
import SectionLinks from "../Section-Links/SectionLinks";
import { useTranslations } from "next-intl";

const About = () => {
    const t = useTranslations("AboutSection")
    return <div className="relative px-8 sm:px-0 flex items-center justify-center my-16" id="about">
        <Effect className="-left-32 md:-left-44 -top-12" />
        <div className="relative w-[95%] max-w-[50rem] bg-background/90 border px-8 py-6 rounded-[12px]">
            <Effect
                variant={"square"}
                size={"default"}
                className="-top-4 -right-5 rotate-12 z-[-10]"
            />
            <SectionTitle title={t("title")} desc={t("desc")} />
            <p className="text-md text-gray-500 mt-6 text-center sm:text-start">
                <span>
                    {t("aboutMe")}
                </span>
            </p>
            <div className="mt-6 flex flex-wrap items-end justify-center sm:justify-start gap-8 text-center sm:text-start">
                <p className="flex flex-col items-start">
                    <span className="text-[35px] font-bold w-full">{t("yearsExp")}</span>
                    <span className="text-gray-600">{t("experience")}</span>
                </p>
                <p className="flex flex-col items-start">
                    <span className="text-[35px] font-bold w-full">{t("projectsNum")}</span>
                    <span className="text-gray-600">{t("completedProjects")}</span>
                </p>
                <SectionLinks link="skills" title={t("discoverSkills")} />
            </div>
        </div>
    </div>
};

export default About;

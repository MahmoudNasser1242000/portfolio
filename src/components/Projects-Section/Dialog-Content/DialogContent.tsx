"use client"
import React, { useState } from "react";
import {
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { IProjects } from "@/types/interfaces";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Calendar, Eye, Github, LayoutDashboard, Tags } from "lucide-react";
import InfoItem from "../Info-Item/InfoItem";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";


const DialogProjectContent = ({ project }: { project: IProjects }) => {
    const [imgUrl, setImgUrl] = useState<string>(urlFor(project.images[0]).url());

    const t = useTranslations("ProjectsSection");
    return <>
        <DialogContent className="sm:max-w-2xl lg:max-w-5xl p-0 dialogContent overflow-auto h-[90%] z-[2000]">
            <DialogHeader>
                <DialogTitle className="text-center bg-muted py-6 capitalize text-foreground">{project.title}</DialogTitle>
            </DialogHeader>
            <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="">
                    <Image
                    src={imgUrl}
                        alt={`${project.title} project Image 1`}
                        width={400}
                        height={400}
                        className="w-full h-[300px]"
                    />
                    <div className="object-cover flex items-center flex-wrap mt-3 gap-2">
                        {
                            project.images.map((img) => (
                                <Image
                                    key={img._key}
                                    src={urlFor(img).url()}
                                    alt={`${project.title} project Image 1`}
                                    width={400}
                                    height={400}
                                    className="object-cover w-[100px] h-[80px] cursor-pointer"
                                    onClick={() => setImgUrl(urlFor(img).url())}
                                />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <p className="text-gray-600 dark:text-gray-400 pb-5">
                        {project.description}
                    </p>
                    <Separator />
                    <div className="py-5">
                        <ul className="text-lg">
                            <InfoItem Icon={Calendar} label={t("publishedAt")}>
                                <span>{project.publishedAt.toLocaleString()}</span>
                            </InfoItem>
                            <InfoItem Icon={LayoutDashboard} label={t("layout")}>
                                <span>{project.isResponsive ? "Responsive" : "N/A"}</span>
                            </InfoItem>
                            <InfoItem Icon={Tags} label={t("tags")}>
                                <div className="flex items-start justify-start flex-wrap">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className={cn("mr-2 mb-2 cursor-pointer", buttonVariants({ variant: "outline", size: "sm" }))}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </InfoItem>
                        </ul>
                    </div>
                    <Separator />
                    <div className="flex items-center flex-wrap gap-2 my-8">
                        {
                            project.githubLink.length > 1 ? (
                                <div className="w-fit flex flex-wrap items-center gap-x-2 gap-y-2 sm:gap-y-0">
                                    <a href={project.githubLink[0]} target="_blank" className={cn(buttonVariants({ variant: "default" }))}>
                                        <Github />
                                        <span>{t("frontendRepo")}</span>
                                    </a>
                                    <a href={project.githubLink[1]} target="_blank" className={cn(buttonVariants({ variant: "default" }))}>
                                        <Github />
                                        <span>{t("backendRepo")}</span>
                                    </a>
                                </div>
                            ) : <a href={project.githubLink[0]} target="_blank" className={cn(buttonVariants({ variant: "default" }))}>
                                <Github />
                                <span>{t("projectRepo")}</span>
                            </a>
                        }
                        {
                            project.demoLink && <a href={project.githubLink[0]} target="_blank" className={cn(buttonVariants({ variant: "outline" }))}>
                                <Eye />
                                <span>{t("demo")}</span>
                            </a>
                        }
                    </div>
                </div>
            </div>
        </DialogContent>
    </>;
};

export default DialogProjectContent;

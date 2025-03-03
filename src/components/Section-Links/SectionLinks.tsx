"use client"
import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { buttonVariants } from "../ui/button";
import { CircleArrowRight } from "lucide-react";
import { Link } from "react-scroll";

interface IProps {
    link: string, 
    title: string, 
}

const SectionLinks: FC<IProps> = ({link, title}) => {
    return <>
        <Link
            to={link}
            smooth={true} 
            duration={500}
            className={cn("transition-colors", buttonVariants({ variant: "default", size: "lg" }))}
        >
            <span>{title}</span>
            <CircleArrowRight />
        </Link>
    </>;
};

export default SectionLinks;

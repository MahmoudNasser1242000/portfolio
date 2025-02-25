import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface ISectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    desc: string;
    h_size?: string;
    p_size?: string;
}
const SectionTitle : FC<ISectionTitleProps> = ({title, desc, className, h_size, p_size, ...props}) => {
    return <div className={cn("flex flex-col", className)} {...props}>
        <h2 className={`text-primary font-semibold text-[${h_size}px]`}>{title}</h2>
        <p className={`text-[30px] text-[${p_size}px]`}>{desc}</p>
    </div>;
};

export default SectionTitle;

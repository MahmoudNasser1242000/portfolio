import { LucideIcon } from "lucide-react";

export interface ISocialMedia {
    href: string;
    icon: LucideIcon;
}

export interface INavLinks extends ISocialMedia {
    title: string;
}
import { LucideIcon } from "lucide-react";

export interface INavLinksAndSocialMedia {
    title: string;
    href: string;
    icon: LucideIcon;
}

export type TCategory = "frontend" | "tools";

export interface IImage {
    image: {
        _type: string;
        asset: {
            _ref: string;
            _type: string;
        };
    }
}

export interface ITabItems {
    title: string;
    value: string;
    icon: LucideIcon;
}

export interface ISkills extends IImage {
    _id: string;
    label: string;
    category: TCategory;
    value: number;
}
import { LucideIcon } from "lucide-react";

export interface INavLinksAndSocialMedia {
    title: string;
    href: string;
    icon: LucideIcon;
}

export type TCategory = "frontend" | "tools";

export interface ITabItems {
    title: string;
    value: string;
    icon: LucideIcon;
}

export interface IParams {
    params: {
        locale: string
    }
}

//schemas for sanity
export interface IImage {
    image: {
        _type: string;
        _key?: number;
        asset: {
            _ref: string;
            _type: string;
        };
    }
}

export interface ISkills extends IImage {
    _id: string;
    label: string;
    category: TCategory;
    value: number;
}

export interface IProjects {
    _id: string;
    title: string;
    images: {
        _type: string;
        _key?: number;
        asset: {
            _ref: string;
            _type: string;
        };
    }[];
    description: string; 
    tags: string[];
    demoLink: string;
    githubLink: string[]; 
    isResponsive: boolean;
    publishedAt: Date;
}

// contact form data
export interface IFormData {
    username: string;
    email: string;
    message: string
}
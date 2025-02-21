import { INavLinksAndSocialMedia } from "@/types/interfaces";
import { Book, MessageSquareText, User, Wrench } from "lucide-react";

export const navLinks: INavLinksAndSocialMedia[] = [
    { href: "#about", title: "About", icon: User },
    { href: "#skills", title: "Skills", icon: Wrench },
    { href: "#projects", title: "Projects", icon: Book },
    { href: "#contact", title: "Contact", icon: MessageSquareText },
];
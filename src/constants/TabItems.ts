import { ITabItems } from "@/types/interfaces";
import { AppWindow, PencilRuler } from "lucide-react";

export const tabItems: ITabItems[] = [
    {title: "frontend", value: "frontend", icon: AppWindow},
    {title: "tools", value: "tools", icon: PencilRuler},
]

export const tabItemsAr: ITabItems[] = [
    {title: "الواجهة الامامية", value: "frontend", icon: AppWindow},
    {title: "الاداوات", value: "tools", icon: PencilRuler},
]
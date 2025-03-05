"use client"
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabItems, tabItemsAr } from "@/constants/TabItems";
import { ITabItems } from "@/types/interfaces";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const TabSkillsList = () => {
    const params = useParams();
    const locale = params.locale;
    const [list, setList] = useState(tabItems);

    useEffect(() => {
        if (locale === "ar") {
            setList(tabItemsAr)
        } else {
            setList(tabItems)
        }
    }, [locale]);
    return <>
        <TabsList className="flex flex-row md:flex-col gap-4 justify-center py-3 md:py-6 px-2 col-span-3 md:col-span-1 h-fit border bg-white dark:bg-black/30">
            {
                list.map(({ title, value, icon: Icon }: ITabItems) => (
                    <TabsTrigger key={value} value={value} className="space-x-2 w-full rounded-sm data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black">
                        {<Icon className="h-6 w-6" />}
                        <span className="capitalize">{title}</span>
                    </TabsTrigger>
                ))
            }
        </TabsList>
    </>;
};

export default TabSkillsList;

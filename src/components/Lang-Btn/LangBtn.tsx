"use client"
import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation";
import { Languages } from "lucide-react";

const LangBtn = () => {
    const router = useRouter();
    return <>
        <Select
            onValueChange={(value) => {
                router.push(`/${value}`);
            }}
        >
            <SelectTrigger>
                <SelectValue placeholder={<Languages className="size-5" />} />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en" className="cursor-pointer">
                    en
                </SelectItem>
                <SelectItem value="ar" className="cursor-pointer">
                    ar
                </SelectItem>
            </SelectContent>
        </Select>
    </>;
};

export default LangBtn;

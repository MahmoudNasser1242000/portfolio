import { LucideIcon } from "lucide-react";
import React, { FC, ReactNode } from "react";

interface IInfoItem {
    Icon: LucideIcon;
    label: string;
    children: ReactNode;
}

const InfoItem: FC<IInfoItem> = ({ Icon, label, children }) => {
    return <>
        <li className="flex items-start justify-start mt-4">
            <span className="text-gray-600 dark:text-gray-400 flex w-[86%] sm:w-[30%] md:w-[40%] lg:w-[55%] gap-x-2">
                <span><Icon /></span>
                <span>{label}:</span>
            </span>
            <div className="flex justify-start w-full">
            {children}
            </div>
        </li>
    </>;
};

export default InfoItem;

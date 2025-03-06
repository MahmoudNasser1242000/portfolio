"use client";
import React from "react";
import { Progress } from "@/components/ui/progress"

const SkillProgress = ({value}: {value: number}) => {
    const [progress, setProgress] = React.useState<number>(0);
    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(value), 500)
        return () => clearTimeout(timer)
    }, [value])
    return <Progress value={progress} className="w-full rounded-[2px] h-[6px] bg-gray-300 dark:bg-secondary" />;
};

export default SkillProgress;

"use client"
import { ChevronsUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-scroll";

const GoToTop = () => {
    const [ArrowUp, setArrowUp] = useState<boolean>();
    useEffect(() => {
        if (window.scrollY >= 200) {
            setArrowUp(true)
        } else {
            setArrowUp(false)
        }
        window.addEventListener("scroll", () => {
            // console.log('====================================');
            // console.log(window.scrollY);
            // console.log('====================================');
            if (window.scrollY >= 200) {
                setArrowUp(true)
            } else {
                setArrowUp(false)
            }
        });

        return () => window.removeEventListener("scroll", () => {});
    }, []);

    return <>
        <Link to="home" smooth={true} duration={500} className={cn(
            "fixed bottom-7 right-6 size-10 z-[2000] opacity-100  duration-500 ease-out",
            !ArrowUp && "opacity-0 cursor-none z-0",  buttonVariants({variant: "default", className: "px-6 transition-all sm:hover:scale-110 duration-500 ease-out"}))}>
            <ChevronsUp className="ChevronsUp" />
        </Link>
    </>;
};

export default GoToTop;

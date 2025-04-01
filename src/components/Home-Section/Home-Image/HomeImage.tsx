"use client"
import { Effect } from "@/components/ui/effects";
import Image from "next/image";
import React from "react";
import logo from "../../../../public/assets/images/profile.png";
import { motion } from "motion/react"

const HomeImage = () => {
    return <div className="size-full rounded-full relative">
        <Effect className="size-full top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]" />
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: {duration: 0.4, delay: 0} }}>
            <Image
                src={logo}
                alt="profile img"
                width={800}
                height={800}
                className="object-cover w-full h-full rounded-full ring-4 ring-primary ring-offset-[5px] ring-offset-background"
            />
        </motion.div>
    </div>;
};

export default HomeImage;

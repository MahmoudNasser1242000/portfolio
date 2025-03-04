"use client"
import React, { FC } from "react";
import { TypeAnimation } from "react-type-animation";

export interface TypeAnimationProps {
    sequence?: Array<string | number>;
    wrapper?: string;
    repeat?: number;
    cursor?: boolean;
    className?: string;
    title1: string;
    title2: string
}

const TextAnimation: FC<TypeAnimationProps> = ({title1, title2}) => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                title1,
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                title2,
                1000,
            ]}
            className="text-primary"
            wrapper="span"
            speed={40}
            repeat={Infinity}
        />
    );
};

export default TextAnimation;
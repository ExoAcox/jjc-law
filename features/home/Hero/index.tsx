"use client";

import Responsive from "@components/Responsive";
import { Dictionary } from "@functions/dictionary";
import { motion } from "motion/react";
import Image from "next/image";
import { fadeInBottom, fadeInLeft, fadeInRight } from "@functions/motion";

import HomeImage from "@images/bitmap/home-hero-image.jpg";
import { scrollToContact } from "@functions/contactUs";

interface Props {
    dict: Dictionary;
}

const Hero: React.FC<Props> = ({ dict }) => {


    return (
        <Responsive>
            <div className="min-h-[calc(100dvh-5rem-12rem)] w-full flex items-center relative z-[2]">
                <div className="flex flex-col gap-6">
                    <motion.h1
                        {...fadeInLeft()}
                        className="max-w-3xl uppercase font-merriweather text-6xl md:text-8xl"
                    >
                        {dict.home.hero.title}
                    </motion.h1>
                    <motion.div
                        {...fadeInBottom()}
                        className="max-w-xl bg-amber-100 dark:bg-amber-200 p-8 rounded-2xl shadow-xs"
                    >
                        <h5 className="dark:text-base-black">{dict.home.hero.desc}</h5>
                        <button onClick={scrollToContact} className="bg-black font-semibold text-white  py-2 px-4 rounded-lg shadow mt-6 active:translate-y-1">
                            Konsultasi Sekarang
                        </button>
                    </motion.div>
                    <motion.h3
                        {...fadeInRight({ delay: 0.5 })}
                        className="italic text-gray-600 dark:text-gray-100"
                    >
                        义人口出智慧 诉说正义
                    </motion.h3>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-[700px] h-full">
                <Image src={HomeImage} alt="" fill className="object-cover" />
            </div>
            <div className="absolute top-0 right-0 w-[700px] h-full bg-linear-to-r from-white to-white/25 dark:from-base-dark-background dark:to-base-dark-background/25" />
        </Responsive>
    );
};

export default Hero;

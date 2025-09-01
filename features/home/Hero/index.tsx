"use client"

import Responsive from "@components/Responsive"
import { Dictionary } from "@functions/dictionary"
import { motion } from "motion/react"
import Image from "next/image"
import { fadeInBottom, fadeInLeft, fadeInRight } from "@functions/motion"

import HomeImage from "@images/bitmap/home-hero-image.jpg"

interface Props {
    dict: Dictionary
}

const Hero: React.FC<Props> = ({ dict }) => {

    return <Responsive className="py-0" parentClassName="relative">
        <div className="min-h-dvh flex items-center relative z-[2]">
            <div className="w-[800px]">
                <motion.h1 {...fadeInLeft()} className="uppercase mb-6 font-merriweather !text-8xl">
                    {dict.home.hero.title}
                </motion.h1>
                <motion.div {...fadeInBottom()} className="bg-amber-100 p-8 rounded-2xl shadow-xs">
                    <h5>
                        {dict.home.hero.desc}
                    </h5>
                    <button className="bg-black text-white py-2 px-4 rounded-lg shadow mt-6">Konsultasi Sekarang</button>
                </motion.div>
                <motion.h3
                    {...fadeInRight({ delay: 0.5 })}
                    className="italic text-gray-600 mt-6">
                    义人口出智慧 诉说正义
                </motion.h3>
            </div>
        </div>
        <div className="absolute top-0 right-0 w-[700px] h-full">
            <Image src={HomeImage} alt="" fill className="object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-[700px] h-full bg-linear-to-r from-white to-white/25" />
    </Responsive>
}

export default Hero
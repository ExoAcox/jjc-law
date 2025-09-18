"use client"

import Responsive from "@components/Responsive"
import { Dictionary } from "@functions/dictionary"

import Image from "next/image"

import Banner from "@images/bitmap/about-hero-image.jpg"
import { motion, useInView } from "motion/react"
import { fadeInBottom, fadeInLeft, fadeInRight } from "@functions/motion"
import { useRef } from "react"

interface Props {
    dict: Dictionary
}

const Hero: React.FC<Props> = ({ dict }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return <Responsive>
        <div ref={ref}>
            <div className="flex gap-8 sm:gap-12 md:gap-16 justify-between flex-col md:flex-row">
                <h1 className="flex flex-col gap-1 text-5xl sm:text-6xl lg:text-8xl font-light max-w-[600px]">
                    <motion.div {...fadeInLeft()} className="text-amber-500 font-normal">JJC LAW OFFICE</motion.div>
                    <motion.div {...fadeInBottom()}>YOUR ONE STOP LEGAL PLATFORM</motion.div>
                </h1>
                <motion.p {...fadeInRight()} className="md:max-w-[500px] leading-7.5 md:leading-8.5" dangerouslySetInnerHTML={{ __html: dict.home.description.desc }}>
                </motion.p>
            </div>
            <motion.div {...fadeInBottom({ isInView })} className="w-full aspect-3/1 relative mt-10 md:mt-20">
                <Image src={Banner} alt="" fill className="object-cover" />
            </motion.div>
        </div>
    </Responsive>
}

export default Hero
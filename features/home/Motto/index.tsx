"use client"

import Responsive from "@components/Responsive";
import { Dictionary } from "@functions/dictionary";
import { fadeInBottom, fadeInLeft, fadeInRight } from "@functions/motion";
import { tw } from "@functions/style";
import { motion } from "motion/react";
import Image from "next/image"


interface CardProps {
    title: string;
    children: string;
    isEven?: boolean
    index: number;
    image: string;
}

const Card: React.FC<CardProps> = ({ title, children, isEven, index, image }) => {
    const fade = !isEven ? fadeInLeft : fadeInRight

    return <motion.div {...fade({ delay: index * 0.2 })} className={tw("max-w-[900px] shadow-xs bg-white dark:bg-stone-100 p-4 rounded-lg items-center sm:items-start flex flex-col sm:flex-row gap-4", isEven && "ml-auto sm:flex-row-reverse")}>
        <div className="size-[200px] shrink-0 rounded-lg relative overflow-hidden">
            <Image src={image} alt="" fill className="object-cover" />
        </div>
        <div className="p-0 sm:py-4 md:p-4 dark:text-base-black">
            <h5 className="text-center sm:text-left">{title}</h5>
            <p className="mt-4">
                {children}
            </p>
        </div>
    </motion.div>
}



interface Props {
    dict: Dictionary
}

const Motto: React.FC<Props> = ({ dict }) => {
    return <Responsive parentClassName="bg-gray-100 dark:bg-zinc-800">
        <motion.h5 {...fadeInBottom()} className="mb-10 md:mb-20 text-center max-w-[800px] mx-auto font-merriweather"> {dict.home.motto.title}</motion.h5>
        <div className="flex flex-col gap-5 md:gap-10">
            <Card title={dict.home.motto.contents[0].title} index={1} image="/images/bitmap/home-motto-1.jpg">
                {dict.home.motto.contents[0].desc}
            </Card>
            <Card title={dict.home.motto.contents[1].title} isEven index={2} image="/images/bitmap/home-motto-2.jpg">
                {dict.home.motto.contents[1].desc}
            </Card>
            <Card title={dict.home.motto.contents[2].title} index={3} image="/images/bitmap/home-motto-3.jpg">
                {dict.home.motto.contents[2].desc}
            </Card>
        </div>

    </Responsive>
}

export default Motto
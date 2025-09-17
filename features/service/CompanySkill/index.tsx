"use client"

import Responsive from "@components/Responsive"
import { Dictionary } from "@functions/dictionary"
import Image from "next/image"

import Illustration from "@images/bitmap/service-illustration.png"
import { motion } from "motion/react"
import { fadeInBottom, fadeInLeft, fadeInRight } from "@functions/motion"


interface Props {
    dict: Dictionary
}

const SkillList: React.FC<Props> = ({ dict }) => {
    return <Responsive>
        <motion.h1 {...fadeInLeft()} className="font-light mb-6 lg:mb-12 uppercase">{dict.service.company_skill.title}</motion.h1>
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="flex flex-col flex-1">
                <motion.div {...fadeInBottom()} className="bg-amber-100 dark:bg-amber-200 py-4 px-5 md:px-8 md:py-6 rounded-xl dark:text-base-black">
                    <p className="leading-6">{dict.service.company_skill.desc}</p>
                </motion.div>
                <motion.div {...fadeInRight()}>
                    <Image src={Illustration} alt="" className="hidden lg:block size-[400px] mt-auto translate-y-4" />
                </motion.div>
            </div>
            <div className="flex flex-col flex-1 c">
                {dict.service.company_skill.contents.map((content, index) => {
                    return <motion.button {...fadeInRight({ delay: 0.1 * index })} key={index} className="p-4 last:border-0 md:last:border-b border-b border-primary-50 font-semibold text-left text-nowrap hover:text-amber-500">
                        {content}
                    </motion.button >
                })}
            </div>
        </div>
    </Responsive>
}

export default SkillList
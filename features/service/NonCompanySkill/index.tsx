"use client"

import Responsive from "@components/Responsive"
import { Dictionary } from "@functions/dictionary"
import { fadeInBottom, fadeInLeft, fadeInRight } from "@functions/motion"
import { motion } from "motion/react"


interface Props {
    dict: Dictionary
}

const SkillList: React.FC<Props> = ({ dict }) => {
    return <Responsive parentClassName="border-y">
        <div className="flex flex-col">
            <div className="mb-8 md:mb-12 lg:mb-16">
                <motion.h1 {...fadeInLeft()} className="font-light uppercase">{dict.service.non_company_skill.title}</motion.h1>
                <motion.p {...fadeInRight()} className="mt-2 text-base  md:text-lg max-w-[600px]">{dict.service.non_company_skill.desc}</motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12">
                {dict.service.non_company_skill.contents.map((content, index) => {
                    return <div key={index} className="flex-1"><motion.div {...fadeInBottom({ delay: (0.2 * index) + 0.2 })} className="h-full py-4 px-5 md:px-8 md:py-6 bg-amber-100 rounded-lg text-gray-700 dark:bg-amber-200">
                        <h5 className="border-b border-stone-400 pb-2.5 mb-4 text-lg lg:text-2xl">{content.title}</h5>
                        <p>{content.desc}</p>
                    </motion.div></div>
                })}
            </div>
        </div>
    </Responsive>
}

export default SkillList
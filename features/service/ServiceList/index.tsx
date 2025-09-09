"use client"

import Responsive from "@components/Responsive"
import { Dictionary } from "@functions/dictionary"
import Image from "next/image"
import { When } from "react-if"

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { useState } from "react"


interface Props {
    dict: Dictionary
}

const SkillList: React.FC<Props> = ({ dict }) => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null)

    const handleClick = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null)
        } else {
            setActiveIndex(index)
        }
    }

    return <Responsive>

        <div className="flex gap-12">
            <h1 className="font-normal mb-12 uppercase max-w-[500px] text-8xl text-amber-500">{dict.service.service.title}</h1>
            <div className="flex flex-col flex-1 c">
                {dict.service.service.contents.map((content, index) => {
                    return <div className="p-4 pb-0 border-b">
                        <button className="flex w-full justify-between mt-1 mb-4 gap-4" onClick={() => handleClick(index)}>
                            <span className="bs font-semibold text-left">{content.title}</span>
                            {activeIndex !== index ? <IoIosArrowDown className="shrink-0 mt-1" /> : <IoIosArrowUp className="shrink-0 mt-1" />}
                        </button>
                        <When condition={activeIndex === index}>
                            <p className="text-cl text-primary-700 pb-6">{content.desc}</p>
                        </When>

                    </div >
                })}
            </div>
        </div>
    </Responsive>
}

export default SkillList
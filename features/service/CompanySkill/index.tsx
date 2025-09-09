import Responsive from "@components/Responsive"
import { Dictionary } from "@functions/dictionary"
import Image from "next/image"

import Illustration from "@images/bitmap/service-illustration.png"


interface Props {
    dict: Dictionary
}

const SkillList: React.FC<Props> = ({ dict }) => {
    return <Responsive>
        <h1 className="font-light mb-12 uppercase">{dict.service.company_skill.title}</h1>
        <div className="flex gap-12">
            <div className="flex flex-col flex-1">
                <div className="bg-amber-100 dark:bg-amber-200 px-8 py-6 rounded-xl dark:text-base-black">
                    <p className="leading-6">{dict.service.company_skill.desc}</p>
                </div>
                <Image src={Illustration} alt="" className="size-[400px] mt-auto translate-y-3" />
            </div>
            <div className="flex flex-col flex-1 c">
                {dict.service.company_skill.contents.map((content, index) => {
                    return <button key={index} className="p-4 border-b border-primary-50 font-semibold text-left text-nowrap hover:text-amber-500">
                        {content}
                    </button >
                })}
            </div>
        </div>
    </Responsive>
}

export default SkillList
import Responsive from "@components/Responsive"
import { Dictionary } from "@functions/dictionary"


interface Props {
    dict: Dictionary
}

const SkillList: React.FC<Props> = ({ dict }) => {
    return <Responsive parentClassName="border-y">
        <div className="flex flex-col">
            <div className="mb-8 md:mb-12 lg:mb-16">
                <h1 className="font-light uppercase">{dict.service.non_company_skill.title}</h1>
                <p className="mt-2 text-base  md:text-lg max-w-[600px]">{dict.service.non_company_skill.desc}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12">
                {dict.service.non_company_skill.contents.map((content, index) => {
                    return <div key={index} className="py-4 px-5 md:px-8 md:py-6 bg-amber-100 rounded-lg flex-1 text-gray-700 dark:bg-amber-200">
                        <h5 className="border-b border-stone-400 pb-2.5 mb-4 text-lg lg:text-2xl">{content.title}</h5>
                        <p>{content.desc}</p>
                    </div>
                })}
            </div>
        </div>
    </Responsive>
}

export default SkillList
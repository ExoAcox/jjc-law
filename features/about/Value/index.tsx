import { FaBalanceScale } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { FaBookBookmark } from "react-icons/fa6";
import Responsive from "@components/Responsive";
import { tw } from "@functions/style";


interface CardProps {
    label: string;
    children: React.ReactElement
    className: string;
}

const Card: React.FC<CardProps> = ({ label, children, className }) => {
    return <div className="flex items-center flex-col gap-4">
        <div className={tw("flex flex-col items-center justify-center p-12 rounded-full", className)} >
            {children}
        </div>
        <label className="font-medium text-2xl">{label}</label>
    </div>
}



interface Props {

}

const Value: React.FC<Props> = ({ }) => {
    return <Responsive parentClassName="border-y">
        <div className="flex flex-col items-center">
            <h1 className="font-medium -mt-4">Values</h1>
            <div className="flex flex-wrap gap-24 mt-8">
                <Card label="Focus" className="bg-emerald-300">
                    <TbTargetArrow className="size-16 text-white dark:text-base-black" />
                </Card>
                <Card label="Integrity" className="bg-orange-300">
                    <FaBalanceScale className="size-16 text-white dark:text-base-black" />
                </Card>
                <Card label="Transparency" className="bg-sky-300">
                    <FaBookBookmark className="size-16 text-white dark:text-base-black" />
                </Card>
            </div>
        </div>
    </Responsive>
}

export default Value
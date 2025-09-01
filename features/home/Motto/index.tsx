import Responsive from "@components/Responsive";
import { Dictionary } from "@functions/dictionary";
import { tw } from "@functions/style";


interface CardProps {
    title: string;
    children: string;
    isEven?: boolean
}

const Card: React.FC<CardProps> = ({ title, children, isEven }) => {
    return <div className={tw("max-w-[600px] bg-white p-4 rounded-lg", isEven && "ml-auto")}>
        <h5>{title}</h5>
        <p className="mt-4">
            {children}
        </p>
    </div>
}



interface Props {
    dict: Dictionary
}

const Motto: React.FC<Props> = ({ dict }) => {
    return <Responsive parentClassName="bg-gray-100">
        <h5 className="mb-24 text-center max-w-[800px] mx-auto"> {dict.home.motto.title}</h5>
        <div className="flex flex-col gap-4">
            <Card title={dict.home.motto.contents[0].title}>
                {dict.home.motto.contents[0].desc}
            </Card>
            <Card title={dict.home.motto.contents[1].title} isEven>
                {dict.home.motto.contents[1].desc}
            </Card>
            <Card title={dict.home.motto.contents[2].title}>
                {dict.home.motto.contents[2].desc}
            </Card>
        </div>
    </Responsive>
}

export default Motto
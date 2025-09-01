import Responsive from "@components/Responsive";
import { tw } from "@functions/style";


interface CardProps {
    title: string;
    children: string;
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
    return <div className={tw("max-w-[600px]", className)}>
        <h5>{title}</h5>
        <p className="mt-4">
            {children}
        </p>
    </div>
}



interface Props {

}

const Motto: React.FC<Props> = ({ }) => {
    return <Responsive parentClassName="bg-gray-200">
        <div className="flex flex-col">
            <Card title="Focus">
                JJC & Associates Law Office memberikan perhatian penuh pada setiap kebutuhan klien kami. Kantor hukum ini berkomitmen mengerjakan setiap layanan hukum dengan seksama dan penuh kehati-hatian sehingga kantor hukum ini dapat memberikan layanan hukum yang maksimal dengan hasil optimal.
            </Card>
            <Card title="Focus" className="ml-auto">
                JJC & Associates Law Office memberikan perhatian penuh pada setiap kebutuhan klien kami. Kantor hukum ini berkomitmen mengerjakan setiap layanan hukum dengan seksama dan penuh kehati-hatian sehingga kantor hukum ini dapat memberikan layanan hukum yang maksimal dengan hasil optimal.
            </Card>
            <Card title="Focus">
                JJC & Associates Law Office memberikan perhatian penuh pada setiap kebutuhan klien kami. Kantor hukum ini berkomitmen mengerjakan setiap layanan hukum dengan seksama dan penuh kehati-hatian sehingga kantor hukum ini dapat memberikan layanan hukum yang maksimal dengan hasil optimal.
            </Card>
        </div>
    </Responsive>
}

export default Motto
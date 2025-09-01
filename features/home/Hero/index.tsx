import Responsive from "@components/Responsive"



interface Props {

}

const Hero: React.FC<Props> = ({ }) => {
    return <Responsive className="py-0">
        <div className="min-h-dvh flex items-center">
            <div className="max-w-[800px]">
                <h1 className="uppercase">
                    Mulut orang benar mengucapkan hikmat dan lidahnya menegakkan keadilan
                </h1>
                <h2 className="italic text-gray-600 border-t-2 pt-4 mt-6 border-gray-600">
                    义人口出智慧 诉说正义
                </h2>
            </div>
        </div>
    </Responsive>
}

export default Hero
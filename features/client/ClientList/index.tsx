import Responsive from "@components/Responsive"
import Image from "next/image"

import { clients } from "@functions/clientList"


interface Props {

}

const ClientList: React.FC<Props> = ({ }) => {
    return <Responsive parentClassName="border-y">
        <div className="flex flex-col items-center gap-8">
            <h4>OUR CLIENTS</h4>
            <div className="grid grid-cols-4 gap-y-12 gap-x-24 mx-auto w-fit">
                {clients.map(client => {
                    return <div key={client.icon} className="size-32 relative grayscale hover:grayscale-0 hover:scale-110 cursor-pointer">
                        <Image unoptimized src={`/images/client/${client.icon}`} fill className="object-contain" alt="a" />
                    </div>
                })}

            </div>
        </div>
    </Responsive>
}

export default ClientList
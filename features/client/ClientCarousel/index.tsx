"use client"

import { clients } from "@functions/clientList";
import Marquee from "react-fast-marquee";

import Image from "next/image"
import Responsive from "@components/Responsive";


interface Props {

}

const ClientCarousel: React.FC<Props> = ({ }) => {
    return <Responsive parentClassName="border-y">
        <h4 className="mb-12 text-center">OUR AWESOME CLIENTS</h4>
        <div className="flex flex-col gap-8">
            <Marquee className="overflow-hidden">
                {clients.sort(() => Math.random() - 0.5).map(client => {
                    return <div key={client.icon} className="size-32 mx-8 relative grayscale hover:grayscale-0 hover:scale-110 cursor-pointer">
                        <Image src={`/images/client/${client.icon}`} fill className="object-contain" alt="a" />
                    </div>
                })}
            </Marquee>
            <Marquee direction="right" className="overflow-hidden">
                {clients.sort(() => Math.random() - 0.5).map(client => {
                    return <div key={client.icon} className="size-32 mx-8 relative grayscale hover:grayscale-0 hover:scale-110 cursor-pointer">
                        <Image src={`/images/client/${client.icon}`} fill className="object-contain" alt="a" />
                    </div>
                })}
            </Marquee>
            <Marquee className="overflow-hidden">
                {clients.sort(() => Math.random() - 0.5).map(client => {
                    return <div key={client.icon} className="size-32 mx-8 relative grayscale hover:grayscale-0 hover:scale-110 cursor-pointer">
                        <Image src={`/images/client/${client.icon}`} fill className="object-contain" alt="a" />
                    </div>
                })}
            </Marquee>
            <Marquee direction="right" className="overflow-hidden">
                {clients.sort(() => Math.random() - 0.5).map(client => {
                    return <div key={client.icon} className="size-32 mx-8 relative grayscale hover:grayscale-0 hover:scale-110 cursor-pointer">
                        <Image src={`/images/client/${client.icon}`} fill className="object-contain" alt="a" />
                    </div>
                })}
            </Marquee>
        </div>
    </Responsive>
}

export default ClientCarousel
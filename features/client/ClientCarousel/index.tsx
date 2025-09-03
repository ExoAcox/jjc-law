"use client"

import { clients } from "@functions/clientList";
import Marquee from "react-fast-marquee";

import Image from "next/image"
import Responsive from "@components/Responsive";


interface Props {

}

const ClientCarousel: React.FC<Props> = ({ }) => {
    return <Responsive parentClassName="border-y dark:border-gray-500">
        <div className="mb-10 md:mb-12 w-fit mx-auto">
            <h4 className="text-center font-bold">OUR AWESOME CLIENTS</h4>
            <div className="w-full h-0.5 bg-base-black mt-0.5 dark:bg-white" />
        </div>
        <div className="flex flex-col gap-8">
            <Marquee className="overflow-hidden">
                {clients.sort(() => Math.random() - 0.5).map(client => {
                    return <div key={client.icon} className="size-32 duration-250 mx-8 relative grayscale hover:grayscale-0 hover:scale-110 cursor-pointer">
                        <Image src={`/images/client/${client.icon}`} fill className="object-contain" alt="a" />
                    </div>
                })}
            </Marquee>
            <Marquee direction="right" className="overflow-hidden">
                {clients.sort(() => Math.random() - 0.5).map(client => {
                    return <div key={client.icon} className="size-32 duration-250 mx-8 relative grayscale hover:grayscale-0 hover:scale-110 cursor-pointer">
                        <Image src={`/images/client/${client.icon}`} fill className="object-contain" alt="a" />
                    </div>
                })}
            </Marquee>
            <Marquee className="overflow-hidden">
                {clients.sort(() => Math.random() - 0.5).map(client => {
                    return <div key={client.icon} className="size-32 duration-250 mx-8 relative grayscale hover:grayscale-0 hover:scale-110 cursor-pointer">
                        <Image src={`/images/client/${client.icon}`} fill className="object-contain" alt="a" />
                    </div>
                })}
            </Marquee>
            <Marquee direction="right" className="overflow-hidden">
                {clients.sort(() => Math.random() - 0.5).map(client => {
                    return <div key={client.icon} className="size-32 duration-250 mx-8 relative grayscale hover:grayscale-0 hover:scale-110 cursor-pointer">
                        <Image src={`/images/client/${client.icon}`} fill className="object-contain" alt="a" />
                    </div>
                })}
            </Marquee>
        </div>
    </Responsive>
}

export default ClientCarousel
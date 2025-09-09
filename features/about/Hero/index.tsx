import Responsive from "@components/Responsive"
import { Dictionary } from "@functions/dictionary"

import Image from "next/image"

import Banner from "@images/bitmap/about-hero-image.jpg"

interface Props {
    dict: Dictionary
}

const Hero: React.FC<Props> = ({ }) => {
    return <Responsive>
        <div className="flex gap-8 sm:gap-12 md:gap-24 justify-between flex-col md:flex-row">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light max-w-[600px]">
                <span className="text-amber-500 font-normal">JJC LAW OFFICE</span><br />
                YOUR ONE STOP LEGAL PLATFORM
            </h1>
            <p className="md:max-w-[500px] leading-7.5">
                <b className="font-semobild">JJC & Associates Law Office</b> berperan aktif dan berkontribusi memberikan layanan hukum bagi kepentingan masyarakat dan perusahaan. Kantor hukum ini bermodalkan intelektualitas yang tinggi dengan didukung profesionalitas dan integritas di bidang hukum. Kepercayaan klien menjadi hal yang terpenting bagi kantor hukum ini sehingga peningkatan kualitas layanan hukum selalu disempurnakan secara berkala. Kantor hukum ini telah berhasil dikenal dengan citra yang positif di kalangan masyarakat dan berbagai perusahaan.
            </p>
        </div>
        <div className="w-full aspect-3/1 relative mt-10 md:mt-20">
            <Image src={Banner} alt="" fill className="object-cover" />
        </div>
    </Responsive>
}

export default Hero
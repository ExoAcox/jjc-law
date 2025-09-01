import Responsive from "@components/Responsive"




interface Props {

}

const Description: React.FC<Props> = ({ }) => {
    return <Responsive>
        <div className="flex gap-16">
            <div className="flex-1 flex flex-col gap-3">
                <label>APA ITU JCC LAW ?</label>
                <h3 className="mb-2">ATTORNEY & COUNSELORS AT LAW</h3>
                <p>
                    JJC & Associates Law Office berperan aktif dan berkontribusi memberikan layanan hukum bagi kepentingan masyarakat dan perusahaan. Kantor hukum ini bermodalkan intelektualitas yang tinggi dengan  didukung  profesionalitas dan integritas di bidang hukum. Kepercayaan klien menjadi hal yang terpenting bagi kantor hukum ini sehingga peningkatan kualitas layanan hukum selalu disempurnakan secara berkala. Kantor hukum ini telah berhasil dikenal dengan citra yang positif di kalangan masyarakat dan berbagai perusahaan.
                </p>
            </div>
            <div className="bg-red-400 flex-1 h-[500px]">

            </div>
        </div>
    </Responsive>
}

export default Description
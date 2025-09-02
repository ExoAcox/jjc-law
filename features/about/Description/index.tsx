import Responsive from "@components/Responsive";

interface Props {}

const Description: React.FC<Props> = ({}) => {
  return (
    <Responsive>
      <div className="flex flex-col-reverse lg:flex-row gap-0 lg:gap-16">
        <div className="flex-1 flex flex-col gap-3 pt-8">
          <h2 className="mb-2 lg:mb-4 text-amber-500">
            About JJC Law Office,
            <br />
            Your One Stop Legal Platform
          </h2>
          <p className="leading-7.5">
            <b className="font-semibold">JJC & Associates Law Office</b>{" "}
            berperan aktif dan berkontribusi memberikan layanan hukum bagi
            kepentingan masyarakat dan perusahaan. Kantor hukum ini bermodalkan
            intelektualitas yang tinggi dengan didukung profesionalitas dan
            integritas di bidang hukum. Kepercayaan klien menjadi hal yang
            terpenting bagi kantor hukum ini sehingga peningkatan kualitas
            layanan hukum selalu disempurnakan secara berkala. Kantor hukum ini
            telah berhasil dikenal dengan citra yang positif di kalangan
            masyarakat dan berbagai perusahaan.
          </p>
        </div>
        <div className="bg-amber-100 lg:flex-1 h-[360px] lg:h-[500px]"></div>
      </div>
    </Responsive>
  );
};

export default Description;

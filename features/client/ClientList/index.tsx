"use client"

import Responsive from "@components/Responsive";
import Image from "next/image";

import { clients } from "@functions/clientList";
import { motion } from "motion/react";
import { fadeInBottom } from "@functions/motion";


interface Props { }

const ClientList: React.FC<Props> = ({ }) => {
  return (
    <Responsive>
      <div className="mb-10 md:mb-12">
        <h2 className="text-center mb-2.5 md:mb-4 text-amber-500">OUR CLIENTS</h2>
        <p className="text-center text-base md:text-lg max-w-[750px] mx-auto">Kepercayaan klien adalah aset terbesar kami. Kami bangga mendampingi berbagai pihak dalam menghadapi tantangan hukum dengan fokus dan dedikasi penuh</p>
      </div>
      <div className="flex flex-wrap xl:grid-cols-5 gap-y-6 gap-x-12 md:gap-y-12 md:gap-x-24 justify-center">
        {[...clients, ...clients, ...clients, ...clients, ...clients].map((client, index) => {
          return (
            <motion.div
              {...fadeInBottom({ delay: 0.0 * index })}
              key={client.icon + index}
              className="size-24 sm:size-30 md:size-36 relative hover:grayscale-0 hover:scale-110 duration-300 cursor-pointer"
            >
              <Image
                src={`/images/client/${client.icon}`}
                fill
                className="object-contain"
                alt="a"
              />
            </motion.div>
          );
        })}
      </div>
    </Responsive>
  );
};

export default ClientList;

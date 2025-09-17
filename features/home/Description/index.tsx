"use client"

import Responsive from "@components/Responsive";
import { Dictionary } from "@functions/dictionary";
import { fadeInBottom, fadeInLeft, fadeInRight } from "@functions/motion";
import { motion } from "motion/react";
import Image from "next/image"

interface Props {
  dict: Dictionary
}

const Description: React.FC<Props> = ({ dict }) => {
  return (
    <Responsive>
      <div className="flex flex-col-reverse items-center lg:flex-row gap-0 lg:gap-16">
        <div className="flex-1 flex flex-col gap-3 pt-8 lg:pt-0">
          <motion.h2 {...fadeInLeft()} className="mb-2 lg:mb-4 text-amber-500" dangerouslySetInnerHTML={{ __html: dict.home.description.title }}>
          </motion.h2>
          <motion.p {...fadeInBottom()} className="leading-7.5" dangerouslySetInnerHTML={{ __html: dict.home.description.desc }}>
          </motion.p>
        </div>
        <motion.div {...fadeInRight()} className="w-full lg:flex-1 h-[200px] sm:h-[288px] lg:h-[500px] xl:h-[400px] relative">
          <Image src="/images/bitmap/home-description-image.jpg" alt="" fill className="object-cover rounded-xl scale-x-[-1]" />
        </motion.div>
      </div>
    </Responsive>
  );
};

export default Description;

"use client";

import Image from "next/image";
import { headerMenu } from "@functions/headerMenu";
import Link from "next/link";
import Responsive from "@components/Responsive";
import { useState } from "react";
import { tw } from "@functions/style";

const Header = () => {
  const [lang, setLang] = useState("id");

  return (
    <Responsive parentClassName="fixed top-0 z-[5] bg-white border-b" className="py-2 md:py-2 flex justify-between items-center">
      <div className="bg-black">
        <Image
          src="/images/logo.png"
          alt="header"
          width={100}
          height={20}
          className="object-contain"
        />
      </div>
      <div className="flex gap-20">
        {headerMenu.map((menu) => {
          return (
            <Link key={menu.name} href={menu.link} className="cursor-pointer">
              {menu.name}
            </Link>
          );
        })}
      </div>
      <div className="flex gap-2">
        <Image
          src="/images/en.webp"
          alt="english"
          width={20}
          height={10}
          className={tw(
            "object-contain cursor-pointer opacity-35",
            lang === "en" && "opacity-100"
          )}
          onClick={() => setLang("en")}
        />
        <Image
          src="/images/id.png"
          alt="indonesia"
          width={20}
          height={10}
          className={tw(
            "object-contain cursor-pointer opacity-35",
            lang === "id" && "opacity-100"
          )}
          onClick={() => setLang("id")}
        />

        <div className="border border-black px-5 py-2">HUBUNGI KAMI</div>
      </div>
    </Responsive>
  );
};

export default Header;

"use client";

import Image from "next/image";
import { headerMenu } from "@functions/headerMenu";
import Link from "next/link";
import Responsive from "@components/Responsive";
import { useState, useEffect } from "react";
import { tw } from "@functions/style";
import useTheme from "@functions/theme";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { usePathname } from "next/navigation";

interface Props {
  lang: string;
}

const Header: React.FC<Props> = ({ lang }) => {
  const pathName = usePathname();
  const locale = pathName?.split("/")[1];

  const { theme, toggleTheme } = useTheme();

  const switchLanguage = () => {
    const newLocale = locale === "en" ? "id" : "en";
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = newLocale;

    return segments.join("/");
  };

  return (
    <Responsive
      parentClassName="fixed top-0 bg-white dark:bg-base-dark-background z-[99] border-b"
      className="py-2 md:py-2 flex justify-between items-center"
    >
      <Link href="/">
        {theme === "dark" ? (
          <Image
            src="/images/logo.png"
            alt="header"
            width={100}
            height={20}
            className="object-contain"
          />
        ) : (
          <Image
            src="/images/logo_black.png"
            alt="header"
            width={100}
            height={20}
            className="object-contain"
          />
        )}
      </Link>

      <div className="flex gap-20">
        {headerMenu.map((menu) => {
          return (
            <Link key={menu.name} href={menu.link} className="cursor-pointer">
              {menu.name}
            </Link>
          );
        })}
      </div>

      <div className="flex gap-3 items-center">
        <Link href={switchLanguage()} className="cursor-pointer">
          {lang === "en" ? (
            <Image
              src="/images/en.webp"
              alt="english"
              width={20}
              height={10}
              className="object-contain cursor-pointer"
            />
          ) : (
            <Image
              src="/images/id.png"
              alt="indonesia"
              width={20}
              height={10}
              className="object-contain cursor-pointer"
            />
          )}
        </Link>
        <button
          className="flex items-center text-[20px] cursor-pointer"
          onClick={toggleTheme}
        >
          {theme !== "dark" ? <MdLightMode /> : <MdDarkMode />}
        </button>
        <div className="border border-black px-5 py-2 dark:border-white">
          HUBUNGI KAMI
        </div>
      </div>
    </Responsive>
  );
};

export default Header;

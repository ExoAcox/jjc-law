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

const Header = () => {
  const pathName = usePathname();
  const locale = pathName?.split("/")[1];

  const { theme, toggleTheme } = useTheme();
  const [lang, setLang] = useState("id");

  const switchLanguage = () => {
    const newLocale = locale === "en" ? "id" : "en";
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = newLocale;

    return segments.join("/");
  };

  return (
    <Responsive className="py-2 flex justify-between items-center">
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
          <button
            onClick={() => (lang === "en" ? setLang("id") : setLang("en"))}
          >
            {lang === "en" ? (
              <Image
                src="/images/en.webp"
                alt="english"
                width={20}
                height={10}
                className={tw(
                  "object-contain cursor-pointer opacity-35",
                  lang === "en" && "opacity-100"
                )}
              />
            ) : (
              <Image
                src="/images/id.png"
                alt="indonesia"
                width={20}
                height={10}
                className={tw(
                  "object-contain cursor-pointer opacity-35",
                  lang === "id" && "opacity-100"
                )}
              />
            )}
          </button>
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

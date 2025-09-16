"use client";

import Image from "next/image";
import Link from "next/link";
import Responsive from "@components/Responsive";
import useTheme from "@functions/theme";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { When } from "react-if";
import { HiMenu, HiX } from "react-icons/hi";
import { Dictionary } from "@functions/dictionary";
import { scrollToContact } from "@functions/contactUs";

interface Props {
  lang: string;
  dict: Dictionary
}

const Header: React.FC<Props> = ({ lang, dict }) => {
  const pathName = usePathname();
  const locale = pathName?.split("/")[1];

  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = () => {
    const newLocale = locale === "en" ? "id" : "en";
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = newLocale;

    return segments.join("/");
  };

  return (
    <Responsive
      parentClassName="fixed top-0 bg-white dark:bg-base-dark-background z-[99] border-b dark:border-gray-800"
      className="py-0 md:py-0 h-20 flex justify-between items-center"
    >
      <Link href="/">
        <Image
          src={theme === "dark" ? "/images/logo.png" : "/images/logo_black.png"}
          alt="header"
          width={80}
          height={20}
          className="object-contain mr-4"
        />
      </Link>

      <div className="hidden md:flex gap-5 lg:gap-10">
        {dict.navbar.menu.map((menu) => (
          <Link key={menu.name} href={menu.link} className="cursor-pointer">
            {menu.name}
          </Link>
        ))}
      </div>

      <div className="flex gap-8 md:gap-4 lg:gap-8 items-center">
        <Link href={switchLanguage()} className="cursor-pointer">
          <Image
            src={lang === "en" ? "/images/en.webp" : "/images/id.png"}
            alt={lang === "en" ? "english" : "indonesia"}
            width={20}
            height={10}
            className="object-contain cursor-pointer shadow"
          />
        </Link>
        <button
          aria-label="Toggle theme"
          className="flex items-center text-xl cursor-pointer"
          onClick={toggleTheme}
        >
          {theme !== "dark" ? <MdLightMode /> : <MdDarkMode />}
        </button>

        <button onClick={scrollToContact} className="uppercase hidden md:block border border-black px-4 py-2 dark:border-white active:translate-y-1 hover:bg-black hover:text-white">
          {dict.navbar.contact}
        </button>

        <button
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <When condition={isOpen}>
        <div className="absolute shadow-lg top-20 left-0 w-full bg-white dark:bg-base-dark-background border-t md:hidden flex flex-col gap-6 p-6 z-[98]">
          {dict.navbar.menu.map((menu) => (
            <Link
              key={menu.name}
              href={menu.link}
              className="cursor-pointer text-lg"
              onClick={() => setIsOpen(false)}
            >
              {menu.name}
            </Link>
          ))}
          <button onClick={() => {
            scrollToContact()
            setIsOpen(false)
          }} className="uppercase border border-black px-5 py-2 dark:border-white w-fit active:translate-y-1">
            {dict.navbar.contact}
          </button>
        </div>
      </When>
    </Responsive>
  );
};

export default Header;

"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Responsive from "@components/Responsive";
import { Dictionary } from "@functions/dictionary";
import React from "react";

interface Props {
    dict: Dictionary
}

const Footer: React.FC<Props> = ({ dict }) => {
    return (
        <footer>
            <Responsive parentClassName="border-t dark:border-transparent bg-gray-700 dark:bg-base-black text-white" className="py-0 md:py-0">
                <div className="py-10 flex flex-wrap gap-10 gap-y-8 sm:justify-around md:justify-between">

                    <div className="flex flex-col gap-4 max-w-[250px]">
                        <Image
                            src="/images/logo.png"
                            alt="footer logo"
                            width={120}
                            height={30}
                            className="object-contain dark:invert-0"
                        />
                        <p className="text-sm">
                            {dict.footer.motto}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-base mb-3">{dict.footer.navigation}</h3>
                        <ul className="flex flex-col gap-2">
                            {dict.navbar.menu.map((menu) => (
                                <li key={menu.name}>
                                    <Link
                                        href={menu.link}
                                        className="text-sm hover:underline"
                                    >
                                        {menu.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-base mb-3">{dict.footer.contact.title}</h3>
                        <ul className="flex flex-col gap-2 text-sm max-w-[300px]">
                            <li>{dict.footer.contact.email}: info.jjclaw@gmail.com</li>
                            <li>{dict.footer.contact.phone}: +62 851-7690-1277</li>
                            <li>{dict.footer.contact.address}: Royal Residence, Ruko, Jl. Royal Residence Jl. Lkr. Dalam Barat No.52 BS 10, Surabaya, Jawa Timur</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-base mb-3">{dict.footer.follow}</h3>
                        <div className="flex gap-4 text-xl">
                            <Link href="#" aria-label="Facebook"><FaFacebook /></Link>
                            <Link href="#" aria-label="Twitter"><FaTwitter /></Link>
                            <Link href="#" aria-label="Instagram"><FaInstagram /></Link>
                            <Link href="#" aria-label="LinkedIn"><FaLinkedin /></Link>
                        </div>
                    </div>
                </div>

                <div className="text-center mx-auto text-sm border-t border-gray-500 py-4">
                    © {new Date().getFullYear()} JJC & Associates Law Office. All rights reserved.
                </div>
            </Responsive>
        </footer>
    );
};

export default Footer;
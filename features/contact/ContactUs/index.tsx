"use client";

import Responsive from "@components/Responsive";
import { tw } from "@functions/style";
import useTheme from "@functions/theme";
import Image from "next/image";
import Link from "next/link";
import { FormEventHandler, useState } from "react";

type FormState = {
  name: string | null;
  email: string | null;
  message: string | null;
};

const ContactUs = () => {
  const { theme } = useTheme();

  const [formState, setFormState] = useState<FormState>({
    name: null,
    email: null,
    message: null,
  });

  const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const { name, email, message } = formState;

    const params = new URLSearchParams({
      subject: `Message from ${name}`,
      body: message ?? "-",
    });

    window.open(
      `mailto:${email}?${params.toString().replaceAll(/\+/g, "%20")}`
    );
  };

  return (
    <Responsive id="contact-us">
      <div className="flex rounded-lg drop-shadow-lg relative overflow-auto justify-end">
        <Image
          src="/images/contact/contact.webp"
          alt="contact us"
          fill
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <form
          className="flex flex-col w-full max-w-[578px] xl:max-w-[618px] xl:ms-auto z-10 px-20 py-8 bg-gradient-to-l from-white dark:from-black to-white/85 dark:to-black/85 gap-20"
          onSubmit={onFormSubmit}
        >
          <div></div>
          <div className="flex flex-col gap-7">
            <h2 className="font-light  dark:text-white">Kontak Kami</h2>
            <p className="text-sm">
              Kami akan segera membalas keluhan Anda dengan melakukan pengecekan
              keseluruhan informasi yang Anda berikan.
            </p>
            <input
              type="text"
              placeholder="Nama"
              name="name"
              className="border-b focus-visible:outline-0 font-medium h-10 py-2"
              required
              onChange={(e) =>
                setFormState({ ...formState, name: e.currentTarget.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="border-b focus-visible:outline-0 font-medium h-10 py-2"
              required
              onChange={(e) =>
                setFormState({ ...formState, email: e.currentTarget.value })
              }
            />
            <textarea
              placeholder={`Halo, saya ingin berkonsultasi\nmengenai layanan hukum`}
              name="pesan"
              className="border-b focus-visible:outline-0 font-medium resize-none py-2"
              required
              onChange={(e) =>
                setFormState({ ...formState, message: e.currentTarget.value })
              }
            />
            <button
              type="submit"
              className="me-auto px-12 py-1 text-white bg-black cursor-pointer dark:bg-white dark:text-black"
            >
              Kirim
            </button>
          </div>
          <div className="flex gap-5 font-light">
            <Link
              href="mailto:info.jjclaw@gmail.com"
              target="_blank"
              className="flex gap-1.5 items-center"
            >
              <p>info.jjclaw@gmail.com</p>
            </Link>
            <Link
              href="https://wa.me/6285176901277"
              target="_blank"
              className="flex gap-1.5 items-center"
            >
              <p>+62 851-7690-1277</p>
            </Link>
          </div>
        </form>
      </div>
    </Responsive>
  );
};

export default ContactUs;

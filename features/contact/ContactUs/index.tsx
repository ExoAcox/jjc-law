"use client";

import Responsive from "@components/Responsive";
import { Dictionary } from "@functions/dictionary";
import { tw } from "@functions/style";
import useTheme from "@functions/theme";
import Image from "next/image";
import Link from "next/link";
import React, { FormEventHandler, useState } from "react";

type FormState = {
  name: string | null;
  email: string | null;
  message: string | null;
};

interface Props {
  dict: Dictionary
}

const ContactUs: React.FC<Props> = ({ dict }) => {

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
          src="/images/bitmap/contact-background.jpg"
          alt="contact us"
          fill
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <form
          className="flex flex-col w-full md:max-w-[578px] xl:max-w-[618px] xl:ms-auto z-10 px-10 sm:px-20 py-8 bg-gradient-to-l from-white dark:from-black to-white/85 dark:to-black/85"
          onSubmit={onFormSubmit}
        >
          <div className="flex flex-col gap-7 mt-8 mb-20">
            <h2 className="font-light dark:text-white">{dict.contact.title}</h2>
            <p className="">
              {dict.contact.desc}
            </p>
            <input
              type="text"
              placeholder={dict.contact.form.name}
              name="name"
              className="border-b focus-visible:outline-0 font-medium h-10 py-2"
              required
              onChange={(e) =>
                setFormState({ ...formState, name: e.currentTarget.value })
              }
            />
            <input
              type="email"
              placeholder={dict.contact.form.email}
              name="email"
              className="border-b focus-visible:outline-0 font-medium h-10 py-2"
              required
              onChange={(e) =>
                setFormState({ ...formState, email: e.currentTarget.value })
              }
            />
            <textarea
              placeholder={dict.contact.form.message}
              name="message"
              className="border-b focus-visible:outline-0 font-medium resize-none py-2"
              required
              onChange={(e) =>
                setFormState({ ...formState, message: e.currentTarget.value })
              }
            />
            <button
              type="submit"
              className="me-auto px-12 py-1 text-white bg-black cursor-pointer dark:bg-white dark:text-black active:translate-y-1"
            >
              {dict.contact.form.send}
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

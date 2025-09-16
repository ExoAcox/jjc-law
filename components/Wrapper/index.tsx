"use client";

import Header from "@components/Header";
import { Dictionary } from "@functions/dictionary";

interface Props {
  children: React.ReactNode;
  dict: Dictionary
  lang: string;
}

const Wrapper: React.FC<Props> = ({ children, lang, dict }) => {
  return (
    <div>
      <Header lang={lang} dict={dict} />
      <div className="pt-20">{children}</div>
    </div>
  );
};

export default Wrapper;

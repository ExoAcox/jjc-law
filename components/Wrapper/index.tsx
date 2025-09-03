"use client";

import Header from "@components/Header";

interface Props {
  children: React.ReactNode;
  lang: string;
}

const Wrapper: React.FC<Props> = ({ children, lang }) => {
  return (
    <div>
      <Header lang={lang} />
      <div className="pt-20">{children}</div>
    </div>
  );
};

export default Wrapper;

"use client";

import Header from "@components/Header";

interface Props {
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="pt-20">{children}</div>
    </div>
  );
};

export default Wrapper;

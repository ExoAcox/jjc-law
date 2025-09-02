"use client";

import Wrapper from "@components/Wrapper";
import Description from "@features/about/Description";
import ClientList from "@features/client/ClientList";
import ContactUs from "@features/contact/ContactUs";
import Hero from "@features/home/Hero";
import Motto from "@features/home/Motto";

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <Motto />
      <Description />
      <ClientList />
      <ContactUs />
    </Wrapper>
  );
};

export default Home;

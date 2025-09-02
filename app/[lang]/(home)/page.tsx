import useDictionary from "@functions/dictionary";

import Description from "@features/about/Description";
import Hero from "@features/home/Hero";
import Motto from "@features/home/Motto";
import ClientCarousel from "@features/client/ClientCarousel";
import ContactUs from "@features/contact/ContactUs";
import Wrapper from "@components/Wrapper";

const Home: React.FC<Page> = async ({ params }) => {
  const { lang } = await params;
  const dict = await useDictionary(lang);

  return (
    <Wrapper>
      <Hero dict={dict} />
      <Motto dict={dict} />
      <Description />
      <ClientCarousel />
      {/* <ClientList /> */}
      <ContactUs />
    </Wrapper>
  );
};

export default Home;

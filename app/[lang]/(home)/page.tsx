import useDictionary from "@functions/dictionary";

import Description from "@features/home/Description";
import Hero from "@features/home/Hero";
import Motto from "@features/home/Motto";
import ClientCarousel from "@features/client/ClientCarousel";
import ContactUs from "@features/contact/ContactUs";
import Wrapper from "@components/Wrapper";
import TeamList from "@features/about/TeamList";
import Footer from "@components/Footer";

const Home: React.FC<Page> = async ({ params }) => {
  const { lang } = await params;
  const dict = await useDictionary(lang);

  return (
    <Wrapper lang={lang} dict={dict}>
      <Hero dict={dict} />
      <Motto dict={dict} />
      <Description dict={dict} />
      <ClientCarousel dict={dict} />
      <TeamList dict={dict} />
      <ContactUs dict={dict} />
      <Footer dict={dict} />
    </Wrapper>
  );
};

export default Home;

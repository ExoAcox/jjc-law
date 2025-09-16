import useDictionary from "@functions/dictionary";

import Hero from "@features/about/Hero";
import ContactUs from "@features/contact/ContactUs";
import Wrapper from "@components/Wrapper";
import Value from "@features/about/Value";
import TeamList from "@features/about/TeamList";

const Home: React.FC<Page> = async ({ params }) => {
    const { lang } = await params;
    const dict = await useDictionary(lang);

    return (
        <Wrapper lang={lang}>
            <Hero dict={dict} />
            <TeamList dict={dict} />
            <ContactUs dict={dict} />
        </Wrapper>
    );
};

export default Home;
